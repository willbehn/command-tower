import React, { useState } from 'react';
import DeckInput from './DeckInput'; 
import CardGallery from './CardGallery'; 
import fetchCardData from './fetchCardData';
import './App.css';


function App() {
  const [cards, setCards] = useState([]); 

  
  const handleDeckSubmit = async (deckList) => {
    const fetchedCards = await fetchCardData(deckList); 
    setCards(fetchedCards); 
  };

  return (
    <div className="App">
      <h1>Command Tower</h1> 
      <DeckInput onDeckSubmit={handleDeckSubmit} /> 
      <CardGallery cards={cards} /> 
    </div>
  );
}

export default App;
