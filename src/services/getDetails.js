export default async function getDetails(movie_id) {
    console.log('a', `https://api.themoviedb.org/3/movie/${movie_id}?api_key=579c7fc7840ab037036071939351dc60&language=en-US`);
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=579c7fc7840ab037036071939351dc60&language=en-US`)
    .then((response) => response.json())
    .then((json) => {
      console.log('json', json);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
}