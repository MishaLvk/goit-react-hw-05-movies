import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';
import { Cast } from 'Pages/MovieDetails/Cast/Cast';
import { Reviews } from 'Pages/MovieDetails/Reviews/Reviews';

import { MoviesDetailis } from 'Pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MoviesDetailis />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
