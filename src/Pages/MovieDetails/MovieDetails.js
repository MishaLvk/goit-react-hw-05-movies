import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { getFilms } from 'services/Api';
import {
  Wrapper,
  PreviousPage,
  MovieCard,
  Details,
  Additional,
} from './MovieDetails.styled';

export const MoviesDetailis = () => {
  const { id } = useParams();
  const [info, setinfo] = useState('');
  const location = useLocation();
  const back = useRef(location.state?.from);

  const additional = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
  ];
  const {
    name,
    title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = info;

  const pathname = `movie/${id}`;

  useEffect(() => {
    const controller = new AbortController();
    async function select() {
      try {
        const Films = await getFilms({ pathname, controller });
        setinfo(Films.data);
      } catch (error) {
        return;
      }
    }
    select();
    return () => {
      controller.abort();
    };
  }, [pathname]);

  return (
    <Wrapper>
      <PreviousPage to={back.current ?? ''}>Go back</PreviousPage>
      {info !== '' && (
        <>
          <MovieCard>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt=""
                width="200"
              ></img>
            </div>

            <Details>
              <h2>
                {name ?? title} ({release_date.slice(0, 4)})
              </h2>
              <p>User Score: {vote_average * 10}%</p>
              <b>Overview</b>
              <p>{overview}</p>
              <b>Genres</b>
              <p>{genres.map(({ title, name }) => title ?? name).join(' ')}</p>
            </Details>
          </MovieCard>
          <Additional>
            <h3>Additional information</h3>
            <ul>
              {additional.map(({ href, text }) => (
                <li key={href}>
                  <Link to={href}>{text}</Link>
                </li>
              ))}
            </ul>
          </Additional>
          <Outlet />
        </>
      )}
    </Wrapper>
  );
};
