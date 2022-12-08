import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingList = styled.ul`
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

export const Title = styled.h2`

  font-size: 30px;
  margin-left: 20px;
}
`;

export const TrendingLink = styled(Link)`
text-decoration: none;
  font-size: 24px;
  margin-top: 5px;
}
`;
