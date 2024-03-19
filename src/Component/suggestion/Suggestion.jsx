import React, { useState } from 'react';
import './Suggestion.css';

export default function Suggestion({ suggestions, handleSuggestionClick }) {
  const [visibility, setVisibility] = useState(Array(suggestions.length).fill(true));

  const hidePrompt = (index) => {
    setVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = false;
      return updatedVisibility;
    });
  };

  return (
    <div className='sug_outer'>
      {suggestions && suggestions.map((suggestion, index) => (
        visibility[index] && (
          <div className='sug_box' key={index} onClick={() => handleSuggestionClick(suggestion.suggestion)}>
            <h5 style={{ color: "#1e1e1e" }}>{suggestion.suggestion}</h5>
            <button onClick={() => hidePrompt(index)}>
              <i className="fa-solid fa-circle-xmark" style={{ color: "#DD6745", fontSize: "x-large" }}></i>
            </button>
          </div>
        )
      ))}
    </div>
  );
}
