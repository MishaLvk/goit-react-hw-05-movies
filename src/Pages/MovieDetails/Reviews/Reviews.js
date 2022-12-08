import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilms } from 'services/Api';
import { StyleReviews } from './Reviews.styled';

export const Reviews = () => {
  const { id } = useParams();
  const [info, setinfo] = useState([]);

  const pathname = `movie/${id}/reviews`;
  useEffect(() => {
    const controller = new AbortController();
    async function select() {
      try {
        const Films = await getFilms({ pathname, controller });
        setinfo(Films.data.results);
      } catch (error) {
        return;
      }
    }
    select();
    return () => {
      controller.abort();
    };
  }, [pathname]);

  if (info === []) {
    return;
  }

  return (
    <>
      {info.length > 0 ? (
        <StyleReviews>
          {info.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </StyleReviews>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};
