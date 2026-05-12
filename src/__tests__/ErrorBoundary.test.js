import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../components/ErrorBoundary';

describe('ErrorBoundary Component', () => {
  const consoleErrorSpy = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  afterEach(() => {
    consoleErrorSpy.mockClear();
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should render children when there is no error', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <div className="test-child">Test Content</div>
      </ErrorBoundary>
    );
    expect(wrapper.find('.test-child').exists()).toBe(true);
  });

  it('should render error UI when error is caught', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>
    );

    const error = new Error('Test error');
    wrapper.find('ErrorBoundary').instance().componentDidCatch(error, {});
    wrapper.setState({ hasError: true, error });

    expect(wrapper.find('.error-boundary').exists()).toBe(true);
    expect(wrapper.find('.error-title').exists()).toBe(true);
  });

  it('should display error icon', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>
    );
    wrapper.setState({
      hasError: true,
      error: new Error('Test'),
    });

    expect(wrapper.find('.error-icon').text()).toBe('⚠️');
  });

  it('should have a reload button', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>
    );
    wrapper.setState({
      hasError: true,
      error: new Error('Test'),
    });

    expect(wrapper.find('.error-action').exists()).toBe(true);
    expect(wrapper.find('.error-action').text()).toBe('Reload Application');
  });
});
