import React, { useState }  from 'react';
import { AnimeCard }        from '../components/AnimeCardComponent';
import { AnimeCardStyle }   from '../styles/HomeStyle';

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm]       = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`URL_DE_LA_API_DE_ANIMES?search=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            console.error('Error al buscar animes:', error);
        }
    };

    return (
        <div>
            <h1>Welcome to the Home page!</h1>

            <h1>Search</h1>
            <input
                type        = "text"
                placeholder = "Ingrese el nombre del anime"
                value       = {searchTerm}
                onChange    = {(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div style={AnimeCardStyle}>
                {searchResults.map((anime) => (
                <AnimeCard key={anime.id} imageUrl={anime.imageUrl} title={anime.title} />
                ))}
            </div>

        </div>
    );
};

export default Home;
