import { render, screen } from '@testing-library/react';
import SettingsItemList from './SettingsItemList';
import DashboardItemsList from "../DashboardItemsList/DashboardItemsList";

describe('SettingsItemList Component', () => {
  test('renders table without items', () => {
    const { container: component } = render(<SettingsItemList items={[]} />);
    expect(component.querySelectorAll('.MuiTableBody-root > .MuiTableRow-root').length).toBe(0);
  });

  test('renders table with 10 items', () => {
    const mockItems = [ ...new Array(10) ].map((item, index) => ({
      id: index,
      name: `# ${index}`,
      type: `T-${index}`,
      dimension: `D-${index}`
    }));
    const { container: component } = render(<SettingsItemList items={mockItems} />);
    expect(component.querySelectorAll('.MuiTableBody-root > .MuiTableRow-root').length).toBe(10);
  });

  test('renders table with name', () => {
    const mockItem = {
      id: 1,
      name: 'randomName',
      type: '',
      dimension: ''
    };
    render(<DashboardItemsList items={[ mockItem ]} />);
    expect(screen.getByText(/randomName/)).toBeInTheDocument();
  });
});
