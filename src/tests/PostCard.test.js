import React from 'react';
import { shallow } from 'enzyme';
import PostCard from '../components/PostCard';

const post = {
  id: '1',
  title: 'Hello world',
  author: 'tester',
  subreddit: 'r/test',
  category: 'News',
  summary: 'A test summary',
  score: 123,
  comments: 10,
  image: 'https://example.com/image.jpg',
};

describe('PostCard', () => {
  it('renders title and summary', () => {
    const wrapper = shallow(<PostCard post={post} onSelect={() => {}} />);
    expect(wrapper.find('h2').text()).toBe('Hello world');
    expect(wrapper.find('p').text()).toBe('A test summary');
  });

  it('calls onSelect when clicked', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(<PostCard post={post} onSelect={onSelect} />);
    wrapper.simulate('click');
    expect(onSelect).toHaveBeenCalled();
  });
});
