import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/testsHelpers/renderWithTranslations';

describe('Sidebar', () => {
  test('test1', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByText('Toggle')).toBeInTheDocument();
  });

  test('test2', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-button-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
