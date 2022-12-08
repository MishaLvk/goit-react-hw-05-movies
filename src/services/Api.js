import axios from 'axios';

export const getFilms = async ({ pathname, search, controller }) => {
  const options = {
    params: {
      api_key: 'db00383349938770d935c81890152882',
      query: search,
    },
    signal: controller.signal,
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/${pathname}`,
    options
  );
  return response;
};
