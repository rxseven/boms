import { addDecorator, configure } from '@storybook/react';

import './styles.scss';

// Import story files
configure(require.context('../src', true, /\.stories\.jsx?$/), module);
