import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

// Cria a interface para children
interface ChildrenProps {
  children: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <Grid>
    <MainHeader />
    <Aside />
    <Content>
      {children}
    </Content>
  </Grid>
);

export default Layout;