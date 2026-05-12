import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyState from '../components/EmptyState';

describe('EmptyState Component', () => {
  it('should render without crashing', () => {
    render(<EmptyState searchTerm="" selectedCategory="all" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('should display search icon', () => {
    render(<EmptyState searchTerm="" selectedCategory="all" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('should display different message when search term exists', () => {
    render(<EmptyState searchTerm="test" selectedCategory="all" />);
    expect(screen.getByText('No posts found')).toBeInTheDocument();
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  it('should display different message for empty category', () => {
    render(<EmptyState searchTerm="" selectedCategory="photography" />);
    expect(screen.getByText('No posts in this category')).toBeInTheDocument();
    expect(screen.getByText(/photography/)).toBeInTheDocument();
  });

  it('should show clear filters button when filters are active', () => {
    render(<EmptyState searchTerm="test" selectedCategory="all" />);
    expect(screen.getByText('Clear Filters and Try Again')).toBeInTheDocument();
  });

  it('should not show clear button when no filters active', () => {
    render(<EmptyState searchTerm="" selectedCategory="all" />);
    expect(screen.queryByText('Clear Filters and Try Again')).not.toBeInTheDocument();
  });
});
