import { ICardsProps } from "../interface/ICardProps";
import { 
    getCardStyles,
    getImageStyles}     from "../styles/CardStyle";


const CardSlideComponent: React.FC<ICardsProps> = ({ anime }) => {
    return (
        <div style = {getCardStyles()}>
            <img src={anime.images.jpg.large_image_url || ''} alt={anime.title} style={getImageStyles()} />
            <p>{anime.title}</p>
        </div>
    );
};

export default CardSlideComponent;