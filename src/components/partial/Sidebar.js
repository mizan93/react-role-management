import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
function Sidebar(props) {
  const [pathName] = useState(props.history.location.pathname);
  console.log(props);
  return (
    <ul class="list-group">
      <li
        class={
          pathName == "/users" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link to="/users"> Users</Link>
      </li>
      <li
        class={
          pathName == "/roles" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link to="/roles"> Roles</Link>
      </li>
      <li
        class={
          pathName == "/permissions" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link to="/permissions"> Permissions</Link>
      </li>
    </ul>
  );
}

export default withRouter(Sidebar);
