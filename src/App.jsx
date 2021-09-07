import "./App.css";
import routes from "./routes";
import { Redirect, Route, Switch } from "react-router";

function App() {
  // React Router
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => {
              if (!route.private) return route.component;
              //add your private route logice here like jwt
              else if (route.private && true) return route.component;
              //replace redirect location to where you want to redirect
              else return <Redirect to="/" />;
            }}
          />
        );
      })}
    </Switch>
  );
}

export default App;
