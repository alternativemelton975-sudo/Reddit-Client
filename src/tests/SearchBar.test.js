import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('renders the search input and forwards value', () => {
    const wrapper = shallow(<SearchBar value="test" onSearch={() => {}} />);
    expect(wrapper.find('input').prop('value')).toBe('test');
  });

  it('calls onSearch when input changes', () => {
    const onSearch = jest.fn();
    const wrapper = shallow(<SearchBar value="" onSearch={onSearch} />);
    wrapper.find('input').simulate('change', { target: { value: 'hello' } });
    expect(onSearch).toHaveBeenCalledWith('hello');
  });
});
