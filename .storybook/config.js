import React from 'react';
import { checkA11y } from '@storybook/addon-a11y';
import { configureActions } from '@storybook/addon-actions';
import { configureViewport } from '@storybook/addon-viewport';
import { addParameters, addDecorator, configure } from '@storybook/react';

// Application context providers
import Providers from '../src/components/core/skeleton/Providers';

// Application styles
import '../src/styles/index.scss';

// Storybook wrappers and styles
import Wrapper from './decorators/Wrapper';
import './styles.scss';

// A11Y addon
addDecorator(checkA11y);

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

// Viewport addon
configureViewport({
  defaultViewport: 'responsive'
});

// Wrap each story within context providers
addDecorator(story => <Providers>{story()}</Providers>);

// Wrap each story within a container
addDecorator(story => <Wrapper>{story()}</Wrapper>);

// Import story files
configure(require.context('../src', true, /\.stories\.jsx?$/), module);
