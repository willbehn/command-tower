import React, { useState, useEffect } from 'react';
import './CardGallery.css';

function CardGallery({ cards }) {
  const [cardStates, setCardStates] = useState([]);
  const antStars = 5;

  useEffect(() => {
    setCardStates(cards.map(() => ({ faded: false, rating: 0})));
  }, [cards]);

  const handleXClick = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index].faded = true;
    setCardStates(newCardStates);
  };

  const handleStarClick = (index, starIndex) => {
    const newCardStates = [...cardStates];
    newCardStates[index].rating = starIndex;
    setCardStates(newCardStates);
  }

  return (
    <div className="card-gallery">
      {cards.map((card, index) => (
        card.image_uris?.normal ? (
          <div
            key={index}
            className={`card-container ${cardStates[index]?.faded ? 'faded' : ''}`}
          >
            <img src={card.image_uris.normal} alt={card.name} />
            <div className="overlay">
              {Array.from({length: antStars}, (_, starIndex) => (
                <span className="stars" key={starIndex} onClick={() => handleStarClick(index, starIndex+1)}>
                {cardStates[index]?.rating > starIndex ? '★' : '☆'}
                </span>

              ))}
              <button className="x-button" onClick={() => handleXClick(index)}>Not played</button>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default CardGallery;
