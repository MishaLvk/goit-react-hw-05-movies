import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  list-style: none;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: column;
}
`;

export const MoviesLink = styled(Link)`
text-decoration: none;
  font-size: 24px;
  margin-top: 5px;
}
`;
