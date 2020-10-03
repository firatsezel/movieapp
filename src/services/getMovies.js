export default async function getMovies(api_key) {
    return fetch('http://api.themoviedb.org/3/trending/movie/week?api_key=579c7fc7840ab037036071939351dc60')
    .then((response) => response.json())
    .then((json) => {
      console.log('json', json);
      return json.results;
    })
    .catch((error) => {
      console.error(error);
    });
}