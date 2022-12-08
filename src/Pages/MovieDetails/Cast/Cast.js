import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilms } from 'services/Api';
import { Gallery, ImageItem, Image } from './Cast.styled';
import image from '../../../Image/advertising.png';
export const Cast = () => {
  const { id } = useParams();
  const [info, setinfo] = useState([]);
  const pathname = `movie/${id}/credits`;

  useEffect(() => {
    const controller = new AbortController();
    async function select() {
      try {
        const Films = await getFilms({ pathname, controller });
        setinfo(Films.data.cast);
      } catch (error) {
        console.log('помилка запиту');
      }
    }
    select();
    return () => {
      controller.abort();
    };
  }, [pathname]);

  if (info === []) {
    console.log('zav');
    return;
  }
  console.log(image);
  return (
    <Gallery>
      {info.map(({ name, profile_path, id, cast_id }) => (
        <ImageItem key={id + cast_id}>
          <div>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : image
              }
              //   src={image}
              alt=""
              width="200"
            ></Image>
          </div>
          <div>{name}</div>
        </ImageItem>
      ))}
    </Gallery>
  );
};
