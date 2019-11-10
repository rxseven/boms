import React from 'react';
import { addDecorator, configure } from '@storybook/react';

import Wrapper from './decorators/Wrapper';
import './styles.scss';

// Import story files
configure(require.context('../src', true, /\.stories\.jsx?$/), module);

// Wrap each story within a container
addDecorator(story => <Wrapper>{story()}</Wrapper>);
