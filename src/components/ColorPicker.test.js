import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker tests', () => {
  it('renders the color picker', () => {
    const colorArray = ['red', 'blue', 'yellow'];
    const wrapper = shallow(<ColorPicker colors = { colorArray }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
