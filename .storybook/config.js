import React from 'react';
import { configureActions } from '@storybook/addon-actions';
import { addParameters, addDecorator, configure } from '@storybook/react';

import Wrapper from './decorators/Wrapper';
import './styles.scss';

// Actions addon
configureActions({
  clearOnStoryChange: true,
  depth: 10,
  limit: 50
});

// Backgrounds addon
addParameters({
  backgrounds: [
    { default: true, name: 'Default', value: '#fff' },
    { name: 'Dark', value: '#242424' },
    { name: 'Facebook', value: '#3b5998' }
  ]
});

// Wrap each story within a container
addDecorator(story => <Wrapper>{story()}</Wrapper>);

// Import story files
configure(require.context('../src', true, /\.stories\.jsx?$/), module);
