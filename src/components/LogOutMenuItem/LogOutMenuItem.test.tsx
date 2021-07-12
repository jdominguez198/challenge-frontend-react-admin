import { render, screen } from '@testing-library/react';
import LogOutMenuItem from './LogOutMenuItem';

describe('LogOutMenuItem Component', () => {
  test('renders with ListItem and Typography', () => {
    const { container: component } = render(<LogOutMenuItem />);
    expect(component.getElementsByClassName('MuiListItem-button').length).toBe(1);
    expect(component.getElementsByClassName('MuiTypography-body1').length).toBe(1);
  });

  test('renders with LogOut text', () => {
    render(<LogOutMenuItem />);
    expect(screen.getByText(/LogOut/)).toBeInTheDocument();
  })
});
