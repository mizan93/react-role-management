// import logo from './assets/images/logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
// import Router from "./router/router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import User from "./views/users/UserContainer";
import Header from "./components/partial/Header";
import List from "./views/posts/List";
import UserContainer from "./views/users/UserContainer";
import RoleContainer from "./views/roles/RoleContainer";
import PermissionContainer from "./views/permissions/PermissionContainer";

function App() {
  return (
    <div className="App">
    <Router>
    <div>
<Header></Header>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/users">
          <UserContainer></UserContainer>
        </Route>
        <Route path="/posts">
        <List></List>
        </Route>
        <Route path="/roles">
        <RoleContainer></RoleContainer>
        </Route>
        <Route path="/permissions">
        <PermissionContainer></PermissionContainer>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>

        </div>
  );
}

export default App;
