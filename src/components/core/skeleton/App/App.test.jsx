import { shallow } from 'enzyme';
import React from 'react';

import App from './index';

describe('<App />', () => {
  const component = <App />;

  it('should render without crashing', () => {
    const wrapper = shallow(component);

    expect(wrapper).toBeDefined();
  });
});
