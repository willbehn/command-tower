async function fetchCardData(cardNames) {
    const promises = cardNames.map(name =>
      fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`)
        .then(res => res.json())
    );
    return Promise.all(promises); 
  }
  
  export default fetchCardData;
  