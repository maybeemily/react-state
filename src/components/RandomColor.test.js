import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('Random color component', () => {
  it('renders the random colors', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
