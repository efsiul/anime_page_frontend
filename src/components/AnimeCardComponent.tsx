import React, { useState }  from 'react';
import { AnimeCardProps }   from '../interface/IAnimeCardProps';
import { 
    animeCardStyles,
    imageStyles 
    }                       from '../styles/AnimeCardStyle';

export const AnimeCard: React.FC<AnimeCardProps> = ({ imageUrl, title }) => {
    return (
        <div style={animeCardStyles}>
        <img src={imageUrl} alt={title} style={imageStyles}/>
        <p>{title}</p>
        </div>
    );
};