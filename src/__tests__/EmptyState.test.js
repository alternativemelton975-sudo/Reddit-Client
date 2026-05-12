import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from '../components/EmptyState';

describe('EmptyState Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <EmptyState searchTerm="" selectedCategory="all" />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should display search icon', () => {
    const wrapper = shallow(
      <EmptyState searchTerm="" selectedCategory="all" />
    );
    expect(wrapper.find('.empty-state-icon').text()).toBe('🔍');
  });

  it('should display different message when search term exists', () => {
    const wrapper = shallow(
      <EmptyState searchTerm="test" selectedCategory="all" />
    );
    expect(wrapper.find('.empty-state-title').text()).toBe('No posts found');
    expect(wrapper.find('.empty-state-message').text()).toContain('test');
  });

  it('should display different message for empty category', () => {
    const wrapper = shallow(
      <EmptyState searchTerm="" selectedCategory="photography" />
    );
    expect(wrapper.find('.empty-state-title').text()).toBe(
      'No posts in this category'
    );
    expect(wrapper.find('.empty-state-message').text()).toContain('photography');
  });

  it('should show clear filters button when filters are active', () => {
    const wrapper = shallow(
      <EmptyState searchTerm="test" selectedCategory="all" />
    );
    expect(wrapper.find('.empty-state-action').exists()).toBe(true);
    expect(wrapper.find('.empty-state-action').text()).toBe(
      'Clear Filters and Try Again'
    );
  });

  it('should not show clear button when no filters active', () => {
    const wrapper = shallow(
      <EmptyState searchTerm="" selectedCategory="all" />
    );
    expect(wrapper.find('.empty-state-action').exists()).toBe(false);
  });
});
