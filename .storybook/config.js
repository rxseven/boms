import React from 'react';
import { addParameters, addDecorator, configure } from '@storybook/react';

import Wrapper from './decorators/Wrapper';
import './styles.scss';

// Backgrounds addon
addParameters({
  backgrounds: [
    { default: true, name: 'Default', value: '#fff' },
    { name: 'Dark', value: '#242424' },
    { name: 'Facebook', value: '#3b5998' }
  ]
});

// Import story files
configure(require.context('../src', true, /\.stories\.jsx?$/), module);

// Wrap each story within a container
addDecorator(story => <Wrapper>{story()}</Wrapper>);
