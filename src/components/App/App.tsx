import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/store';

import AdminLayout from '../AdminLayout/AdminLayout';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Settings from '../../pages/Settings/Settings';
import Login from '../../pages/Login/Login';

function App() {
  const { token } = useSelector((state: IAppState) => state.user);

  const renderGuest =
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect to='/login' />
    </Switch>
  ;
  const renderAuthorized =
    <AdminLayout>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Redirect to='/dashboard' />
      </Switch>
    </AdminLayout>
  ;

  return (
    <div className="app">
      {token ? renderAuthorized : renderGuest}
    </div>
  )
}

export default App;
