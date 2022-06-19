const fetchPlanets = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const fetchPlanetsJSON = await request.json();
  return fetchPlanetsJSON.results;
};
export default fetchPlanets;
