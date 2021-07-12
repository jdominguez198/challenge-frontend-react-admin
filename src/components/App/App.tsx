import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Settings from '../../pages/Settings/Settings';
import AdminLayout from '../AdminLayout/AdminLayout';

function App() {
  return (
    <div className="app">
      <AdminLayout>
        <Switch>
          <Route exact path="/">
            <p>Loading...</p>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </AdminLayout>
    </div>
  )
}

export default App;
