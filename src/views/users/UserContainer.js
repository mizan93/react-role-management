import React from "react";
import Sidebar from "../../components/partial/Sidebar";
import UserList from "../../components/user/UserList";

function UserContainer() {
  return (
    <div className="dahsboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-9 mt-3">
            <UserList></UserList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserContainer;
