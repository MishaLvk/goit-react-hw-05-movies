import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchFilms.styled';

export function Searchbar() {
  const [request, setRequest] = useState('');
  const [, setSearchParams] = useSearchParams();
  const handleRequestChange = event => {
    setRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (request.trim() === '') {
      Notify.info(`Введіть назву фільму`);
      return;
    }
    setRequest(request);
    setSearchParams(request !== '' ? { query: request } : {});
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        className="input"
        type="text"
        placeholder="Search films"
        onChange={handleRequestChange}
        value={request}
      />
      <SearchFormButton type="submit" className="button">
        Search
      </SearchFormButton>
    </SearchForm>
  );
}
