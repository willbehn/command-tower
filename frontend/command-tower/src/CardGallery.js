import React from 'react';
import './CardGallery.css'; 

function CardGallery({ cards }) {
  return (
    <div className="card-gallery"> 
      {cards.map((card, index) => (
        card.image_uris?.normal ? ( 
          <img 
            key={index} 
            src={card.image_uris.normal} 
            alt={card.name} 
          />
        ) : null 
      ))}
    </div>
  );
}

export default CardGallery;
