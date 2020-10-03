export default async function getCredits(movie_id) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=579c7fc7840ab037036071939351dc60&language=en-US`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
}