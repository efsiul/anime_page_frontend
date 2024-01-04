import React, { useState } from 'react';
import { buttonContainerStyle, buttonStyle, inputContainerStyle } from '../styles/InputStyle';

interface InputForSearchComponentProps {
    onSearch: (searchTerm: string) => void;
}

const InputForSearchComponent: React.FC<InputForSearchComponentProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div style={inputContainerStyle}>
            
            <div>
                <input 
                    type="text" 
                    placeholder = "Ingrese el nombre del anime"
                    value={searchTerm} 
                    onChange={handleInputChange}
                />
            </div>
            <div style={buttonContainerStyle}>
                <button 
                    onClick={handleSearch}
                    style={buttonStyle}
                    >
                        Buscar
                    </button>

            </div>
            
    
        </div>
    );
};

export default InputForSearchComponent;
