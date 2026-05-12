import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render logo', () => {
    render(<Header />);
    expect(screen.getByText('📰')).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('should have header with correct class', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should contain explore and support links', () => {
    render(<Header />);
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });
});
