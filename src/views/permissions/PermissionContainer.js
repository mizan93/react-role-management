import React from "react";
import Sidebar from "../../components/partial/Sidebar";
import PermissionList from "../../components/permission/PermissionList";

function PermissionContainer() {
  return (
    <div className="dahsboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <Sidebar></Sidebar>{" "}
          </div>
          <div className="col-9 mt-3">
            <PermissionList></PermissionList>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PermissionContainer;
