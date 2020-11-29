import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './RouteConfig';

function App() {
  return (
    <Router>
      <div>
        <div>header</div>
        {routes.map(route => (
          <Route
            path={route.path}
            render={() => (<route.component />)}
          />
        ))}
        <div> coucou </div>
      </div>
    </Router>
  );
}

export default App;
