import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts, onSelectPost }) => (
  <section className="grid-shell" aria-live="polite">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} onSelect={() => onSelectPost(post)} />
    ))}
  </section>
);

export default PostList;
