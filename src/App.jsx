import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import routes from './RouteConfig';

function App() {
  return (
    <Router>
      <div>
        <div>
          {
            routes.map((route) => (
              <Link
                style={{ margin: '10px' }}
                to={route.path}
                key={`link-${route.path}`}
              >
                {route.path}
              </Link>
            ))
          }
        </div>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            render={() => (<route.component />)}
          />
        ))}
        <Redirect from="/" to="/home" />
        <div> coucou </div>
      </div>
    </Router>
  );
}

export default App;
