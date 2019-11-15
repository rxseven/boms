import { shallow } from 'enzyme';
import React from 'react';

import Router from './index';

describe('<Router />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Router />);

    expect(wrapper).toBeDefined();
  });
});
