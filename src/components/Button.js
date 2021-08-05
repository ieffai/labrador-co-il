import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  white-space: nowrap;
  opacity: 0.9;
  outline: none;
  border: 1px solid white;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  align-items: center;
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};
  border-radius: 50px;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;
