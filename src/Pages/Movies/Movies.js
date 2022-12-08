import { useState, useEffect } from 'react';
import { getFilms } from 'services/Api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Searchbar } from '../../components/SearchFilms/SearchFilms';
import { MoviesList, MoviesLink } from './Movies.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Movies = () => {
  const [searchParam] = useSearchParams();
  const [ArrayFilms, setArrayFilms] = useState([]);
  const location = useLocation();
  const searchQuery = searchParam.get('query') ?? '';

  const pathname = 'search/movie';

  useEffect(() => {
    const controller = new AbortController();

    if (searchQuery === '') {
      return;
    }
    async function select() {
      try {
        const search = searchQuery;
        const Films = await getFilms({ pathname, search, controller });
        if (Films.data.results.length === 0) {
          Notify.info(`за запитом ${pathname} фільмів не знайдено`);

          return;
        }
        setArrayFilms(Films.data.results);
      } catch (error) {
        return;
      }
    }
    select();
    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <>
      <Searchbar />
      {ArrayFilms.length > 0 && (
        <MoviesList>
          {ArrayFilms.map(({ id, name, title }) => (
            <li key={id}>
              <MoviesLink to={`${id}`} state={{ from: location }}>
                {name ?? title}
              </MoviesLink>
            </li>
          ))}
        </MoviesList>
      )}
    </>
  );
};
