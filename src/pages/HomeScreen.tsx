import React, {
  useEffect,
  useState 
}                               from 'react';
import Carousel                 from 'nuka-carousel';
import InputForSearchComponent  from '../components/InputForSearchComponent';
import CardSlideComponent       from '../components/CardComponent';
import { insecureInstance }     from '../api/BaseURL';
import { IAnimeProps }          from '../interface/IAnimeProps';
import { IScoreProps }          from '../interface/IScoreProps';
import {
  URL_IMAGEN_PULGAR_ABAJO,
  URL_IMAGEN_PULGAR_ARRIBA,
  URL_IMAGEN_PULGAR_ARRIBA2,
}                               from '../components/ImagesRecommendComponent'; 
import { 
  ContainerStyle,
  TitleStyle,
  buttonStyles,
  getCardsStyles,
  getCarruselStyles,
  // getContainerStyle,
  thumbImageStyle
}                               from '../styles/HomeStyle';




const HomeScreen: React.FC = () => {
  const [animeData, setAnimeData]                 = useState<IAnimeProps[]>([]);
  const [animeInterna, setAnimeInterna]           = useState<[]>([]);
  const [averageScoreArray, setAverageScoreArray] = useState<IScoreProps[]>([]);
  const [searchTerm, setSearchTerm]               = useState('Naruto');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response  = await insecureInstance.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw`);
        setAnimeData(response.data.data);

        const res       = await insecureInstance.get(`api/anime/search?title=${searchTerm}`);
        setAnimeInterna(res.data)

        const resp      = await insecureInstance.get(`api/anime/averageScoreByTypeSeason`);
        setAverageScoreArray(resp.data)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);


  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };


  console.log('averageScoreArray', averageScoreArray);
  console.log('animeInterna', animeInterna);

  return (
    <div style = {ContainerStyle}>
      <div>
        <h1 style = {TitleStyle}>Animes de {searchTerm}</h1>
        <InputForSearchComponent onSearch={handleSearch} />
      </div>
      <div style ={getCarruselStyles()}>
        <Carousel
          slidesToShow            ={5}
          slidesToScroll          ={1}
          wrapAround              ={true}
          cellSpacing             ={30}
          cellAlign               ="center"
          autoplay                ={true}
          autoplayInterval        ={5000}
          pauseOnHover            ={true}
          withoutControls         ={false}
          renderCenterLeftControls={({ previousSlide }) => (
            <button 
              onClick={previousSlide}
              style={buttonStyles} 
            >
                Previous
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button 
              onClick={nextSlide}
              style={buttonStyles}
            >
                Next
            </button>
          )}
        >
          {animeData.map((anime) => {
            const animeType = anime.type.toLowerCase();
            const foundItem = averageScoreArray.find((item) => item.type.toLowerCase() === animeType);

            let thumbImage;
            let message;

            if (foundItem) {
              const average = foundItem.average;

              if (anime.score >= 1 && anime.score <= 4) {
                if (anime.score <= average) {
                  thumbImage = URL_IMAGEN_PULGAR_ABAJO;
                  message = 'No lo recomiendo.';
                } else {
                  thumbImage = URL_IMAGEN_PULGAR_ABAJO;
                  message = 'Este tipo de contenido no es tan recomendado.';
                }
              } else if (anime.score >= 5 && anime.score <= 7) {
                if (anime.score <= average) {
                  thumbImage = URL_IMAGEN_PULGAR_ARRIBA;
                  message = 'Podrías divertirte.';
                } else {
                  thumbImage = URL_IMAGEN_PULGAR_ARRIBA;
                  message = 'Este tipo de contenido es muy recomendable.';
                }
              } else if (anime.score > 7) {
                if (anime.score <= average) {
                  thumbImage = URL_IMAGEN_PULGAR_ARRIBA2;
                  message = 'Este contenido es bastante agradable.';
                } else {
                  thumbImage = URL_IMAGEN_PULGAR_ARRIBA2;
                  message = 'Genial, este es uno de los mejores animes.';
                }
              }
            }

            return (
              <div key={anime.mal_id} style = {getCardsStyles()}>
                <CardSlideComponent anime={anime} />
                <p>Tipo : {anime.type}</p>
                <p>score: {anime.score}</p>
                {thumbImage && <img src={thumbImage} alt="Imagen de recomendación" style={thumbImageStyle} /> }
                <p>{message || 'N/A'}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeScreen;
