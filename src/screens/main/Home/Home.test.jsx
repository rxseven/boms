import { shallow } from 'enzyme';
import React from 'react';

import Home from './index';

describe('<Home />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toBeDefined();
  });
});
