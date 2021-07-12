import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardItems } from '../../store/dummy/actions';
import DashboardItemsList from '../../components/DashboardItemsList/DashboardItemsList';

function Dashboard() {
  const { dashboardItems } = useSelector((state: any) => state.dummy);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dashboardItems || !dashboardItems.length || dashboardItems.length === 0) {
      dispatch(fetchDashboardItems());
    }
  }, [ dispatch, dashboardItems ]);

  return (
    <div className="page page__dashboard">
      <DashboardItemsList items={dashboardItems} />
    </div>
  );
}

export default Dashboard;
