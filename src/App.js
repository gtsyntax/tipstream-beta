import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<span>Loading...</span>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
