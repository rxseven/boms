import { shallow } from 'enzyme';
import React from 'react';

import Routes from './index';

describe('<Routes />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper).toBeDefined();
  });
});
