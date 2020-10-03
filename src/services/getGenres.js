
export default async function getGenres(api_key) {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=579c7fc7840ab037036071939351dc60&language=en-US')
    .then((response) => response.json())
    .then((json) => {
      return json.genres;
    })
    .catch((error) => {
      console.error(error);
    });
}