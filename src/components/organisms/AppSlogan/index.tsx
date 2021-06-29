import React from 'react';

import illustrationImg from '../../../assets/images/illustration.svg';

import Typography from '../../atoms/Typography';

import { StyledSection } from './styles';

const AppSlogan: React.FC = () => (
  <StyledSection>
    <img src={illustrationImg} alt="Let Me Ask login page Illustration" />
    <Typography element="h1">Toda pergunta tem uma resposta.</Typography>
    <Typography element="h2">
      Aprenda e compartilhe conhecimento com outras pessoas.
    </Typography>
  </StyledSection>
);

export default AppSlogan;
