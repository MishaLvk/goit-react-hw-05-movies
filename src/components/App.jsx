import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';
// import { Cast } from 'Pages/MovieDetails/Cast/Cast';
// import { Reviews } from 'Pages/MovieDetails/Reviews/Reviews';
// import { MoviesDetailis } from 'Pages/MovieDetails/MovieDetails';

const MoviesDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('../Pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
