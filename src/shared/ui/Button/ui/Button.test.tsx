import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('test1', () => {
    render(<Button buttonTheme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('test2', () => {
    render(<Button buttonTheme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
