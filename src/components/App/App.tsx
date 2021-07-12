import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Settings from '../../pages/Settings/Settings';
import AdminLayout from '../AdminLayout/AdminLayout';
import Login from '../../pages/Login/Login';
import Logout from '../../pages/Logout/Logout';

const isLoggedIn = false;

function App() {
  const renderGuest =
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect to='/' />
    </Switch>
  ;
  const renderAuthorized =
    <AdminLayout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/login">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Redirect to='/' />
      </Switch>
    </AdminLayout>
  ;

  return (
    <div className="app">
      {isLoggedIn ? renderAuthorized : renderGuest}
    </div>
  )
}

export default App;
