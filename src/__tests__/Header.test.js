import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.logo-icon').exists()).toBe(true);
  });

  it('should render navigation links', () => {
    const wrapper = shallow(<Header />);
    const navLinks = wrapper.find('.header-link');
    expect(navLinks).toHaveLength(2);
  });

  it('should have header with correct class', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header.header').exists()).toBe(true);
  });

  it('should contain explore and support links', () => {
    const wrapper = shallow(<Header />);
    const links = wrapper.find('.header-link');
    expect(links.at(0).text()).toBe('Explore');
    expect(links.at(1).text()).toBe('Support');
  });
});
