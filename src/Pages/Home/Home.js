import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilms } from 'services/Api';
import { TrendingList, TrendingLink, Title } from './Home.styled';

export const HomePage = () => {
  const [ArrayFilms, setArrayFilms] = useState([]);
  const pathname = 'trending/movie/day';
  const location = useLocation();
  useEffect(() => {
    const controller = new AbortController();
    async function select() {
      try {
        const Films = await getFilms({ pathname, controller });
        setArrayFilms(Films.data.results);
      } catch (error) {
        return;
      }
    }
    select();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <TrendingList>
        {ArrayFilms.map(({ id, name, title }) => (
          <li key={id}>
            <TrendingLink to={`movies/${id}`} state={{ from: location }}>
              {name ?? title}
            </TrendingLink>
          </li>
        ))}
      </TrendingList>
    </>
  );
};
