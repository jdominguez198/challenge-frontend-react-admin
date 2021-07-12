import { render, screen } from '@testing-library/react';
import DashboardItemsList from './DashboardItemsList';

describe('DashboardItemsList Component', () => {
  test('renders without cards', () => {
    const { container: component } = render(<DashboardItemsList items={[]} />);
    expect(component.getElementsByClassName('MuiCard-root').length).toBe(0);
  });

  test('renders with 10 cards', () => {
    const mockItems = [ ...new Array(10) ].map((item, index) => ({
      id: index,
      name: `# ${index}`,
      image: ''
    }));
    const { container: component } = render(<DashboardItemsList items={mockItems} />);
    expect(component.getElementsByClassName('MuiCard-root').length).toBe(10);
  });

  test('renders card with name', () => {
    const mockItem = {
      id: 1,
      name: 'randomName',
      image: ''
    };
    render(<DashboardItemsList items={[ mockItem ]} />);
    expect(screen.getByText(/randomName/)).toBeInTheDocument();
  })
});
