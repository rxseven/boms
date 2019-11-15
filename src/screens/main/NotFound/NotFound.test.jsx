import { shallow } from 'enzyme';
import React from 'react';

import NotFound from './index';

describe('<NotFound />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toBeDefined();
  });
});
