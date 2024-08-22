import React, { useState } from 'react';

function DeckInput({ onDeckSubmit }) {
  const [deckList, setDeckList] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenst refresh
    onDeckSubmit(deckList.split('\n'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={deckList}
        onChange={(textarea) => setDeckList(textarea.target.value)} 
        rows="5"
        placeholder="Enter decklist here ..."
      />
      <button type="submit">Submit</button> 
    </form>
  );
}

export default DeckInput;
