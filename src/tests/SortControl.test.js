import React from 'react';
import { shallow } from 'enzyme';
import SortControl from '../components/SortControl';

describe('SortControl', () => {
  it('renders current sort value', () => {
    const wrapper = shallow(<SortControl value="score" onChange={() => {}} />);
    expect(wrapper.find('select').prop('value')).toBe('score');
  });

  it('calls onChange when selection changes', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<SortControl value="newest" onChange={onChange} />);
    wrapper.find('select').simulate('change', { target: { value: 'comments' } });
    expect(onChange).toHaveBeenCalledWith('comments');
  });
});
