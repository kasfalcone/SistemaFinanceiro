import React from 'react';

import { Container } from './styles';

interface IMessageBox {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBox> = ({
  title,
  description,
  footerText,
  icon
}) => (
  <Container>
    <header>
      <h1>
        {title}
        <img src={icon} alt="" />
      </h1>
      <p>{description}</p>
    </header>

    <footer>
      <span>{footerText}</span>
    </footer>
  </ Container>
);

export default MessageBox;