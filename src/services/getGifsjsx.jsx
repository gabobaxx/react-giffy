const api_key = 'YcuzFfb8xNx8gpuyJmJlI49rIhFzYwg9';

export const getGifs = ({ keyword = 'pandas' } = {}) => {
  const uri = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(uri)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { title, id } = image;
        const { url } = image.images.downsized_medium;
        return { url, title, id };
      });
      return gifs;
    })
    .catch((e) => console.error(e));
};
