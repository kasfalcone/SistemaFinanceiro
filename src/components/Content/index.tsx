import React from 'react';

import { Container } from './styles';

// Cria a interface para children
interface IChildrenProps {
  children: React.ReactNode;
}

const Content: React.FC<IChildrenProps> = ({ children }) => (
  <Container>
    {children}
  </ Container>
);

export default Content;