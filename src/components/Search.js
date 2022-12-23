import React, { useState } from 'react';
import { mockCompanyDetails, mockSearchResults } from '../constants/mock';

const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState(mockSearchResults.results);

    const clear = () => {
        setInput("")
        setBestMatches([]);
    };

    const updateBestMatches = () => {
        setBestMatches(mockSearchResults.results)
    }

  return (
    <div className='flex items-center my-4 border-2 rouded-md relative z-50 w-96 bg-white border-neutral-100'>
        <input 
        type="text" 
        value={input} 
        className="w-full px-4 py-2 focus:outline-none rounded-md" 
        placeholder='Search stock ...'
        onChange={(event) => {
            setInput(event.target)
        }}
        onKeyPress={(event) => {
            if (event.key === "Enter") {
                updateBestMatches();
            }
        }}
        />
    </div>
  )
}

export default Search