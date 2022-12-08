import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;

export const MovieCard = styled.div`
  display: flex;
  box-shadow: 0 5px 5px -5px #333;
`;

export const Details = styled.div`
  margin-left: 14px;
`;

export const Additional = styled.div`
  margin-bottom: 10px;
  box-shadow: 0 5px 5px -5px #333;
`;

export const PreviousPage = styled(Link)`
  display: block;
  width: 70px;
  color: blue;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  :hover {
    color: red;
  }
`;
