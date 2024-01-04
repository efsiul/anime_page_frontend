import { CSSProperties } from 'react';

export const ContainerStyle: CSSProperties = {  
    backgroundColor: 'black',
    padding: '20px',
    width: '100%',
    boxSizing: 'border-box',
}

export const TitleStyle: CSSProperties = {  
    color: 'white',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px'
}

export const buttonStyles: CSSProperties = {
    backgroundColor: 'royalblue',
    color: 'white', 
    border: 'none', 
    padding: '10px 30px', 
    cursor: 'pointer', 
    borderRadius: '15px', 
    fontSize: '16px', 
    margin: '1px', 
};



export const CarruselStyle: CSSProperties = {  
    margin: '20px auto',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '20px',
    maxWidth: '90%',
    maxHeight: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flow-root', 
    flexDirection: 'column',
    alignItems: 'center',
};

export const cardsStyles: CSSProperties = {
    padding: '5px', 
    textAlign: 'left',
    marginBottom: '10px', 
    width: '100%',
    boxSizing: 'border-box',
};

export const thumbImageStyle: CSSProperties = {  
    width: '40px', 
    height: '30px', 
    borderRadius: '50%',
};


export const getTitleStyle = () => {
    return {
        ...TitleStyle,
        '@media (min-width: 384px)': {
            ...TitleStyle,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '3px',
            fontSize: '10px',
        },
        '@media (min-width: 412px)': {
            ...TitleStyle,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '5px',
            fontSize: '15px',
        },
        '@media (min-width: 800px)': {
            ...TitleStyle,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '25px',
        },
    };
};

export const getCarruselStyles = () => {
    return {
        ...CarruselStyle,
        '@media (min-width: 384px)': {
            ...CarruselStyle,
            flexDirection   : 'row',
            justifyContent  : 'center',
            alignItems      : 'flex-start',
        },
    };
};

export const getCardsStyles = () => {
    return {
        ...cardsStyles,
        '@media (min-width: 384px)': {
            ...cardsStyles,
            padding: '2px', 
            textAlign: 'left',
            fontSize: '5px',
            marginBottom: '2px', 
            width: '100%',

        },
        '@media (min-width: 412px)': {
            ...cardsStyles,
            padding: '3px', 
            textAlign: 'left',
            fontSize: '8px',
            marginBottom: '5px', 
            width: '100%',

        },
        '@media (min-width: 800px)': {
            ...cardsStyles,
            padding: '5px', 
            textAlign: 'left',
            fontSize: '10px',
            marginBottom: '10px', 
            width: '100%',

        },
    };
};

