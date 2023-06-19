function fetchBreeds(url) {
  return fetch(url)
  .then(response => response.json())
}   

function fetchCatByBreed(breedId){
  
  const KEY_API = 'live_x5Zs2wKkpSQZrgpNOkEYarEDVcSuuwgonkdqXqkbfPmJtYyMUAvVsua2dSIH3sgb';
  const urlСatByBreed = `https://api.thecatapi.com/v1/images/search?api_key=${KEY_API}&limit=1&breed_ids=${breedId}`

  return fetch(urlСatByBreed)
  .then(response => response.json())
  }

export { fetchBreeds,fetchCatByBreed }; 