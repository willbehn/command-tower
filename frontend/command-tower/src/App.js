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
      <h1>Command Tower MVP</h1> 
      <DeckInput onDeckSubmit={handleDeckSubmit} /> 
      <div>After game recap: Select the cards played this game and rate their perfomence. Card performance will be compared to earlier games.</div>
      <CardGallery cards={cards} /> 
    </div>
  );
}

export default App;
