import React from 'react';
import { Typography as ITypography } from '../../../interfaces';

import { Element } from './styles';

const Typography: React.FC<ITypography> = ({ element, children }) => (
  <Element element={element} as={element}>
    {children}
  </Element>
);

export default Typography;
