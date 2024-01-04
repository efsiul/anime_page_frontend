import { CSSProperties } from 'react';


export const cardStyles: CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px', 
    textAlign: 'center', 

  };

export const imageStyles: CSSProperties = {
    maxWidth: '150px',
};

export const getCardStyles = () => {
  return {
    ...cardStyles,
    '@media (min-width: 384px)': {
      ...cardStyles,
      padding: '3px',
    },
    '@media (min-width: 412px)': {
      ...cardStyles,
      padding: '15px',
    },
    '@media (min-width: 800px)': {
      ...cardStyles,
      padding: '8px',
    },
  };
};

export const getImageStyles = () => {
  return {
    ...imageStyles,
    '@media (min-width: 384px)': {
      ...imageStyles,
      maxWidth: '80px',
    },
    '@media (min-width: 412px)': {
      ...imageStyles,
      maxWidth: '100px',
    },
    '@media (min-width: 800px)': {
      ...imageStyles,
      maxWidth: '120px',
    },
  };
};