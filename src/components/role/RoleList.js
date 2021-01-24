import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import getRolePermissionData from "../../services/roles/RolePermissionData";

// import getPermissonMasterData from "../../services/roles/RolePermissionData";
import AddRole from "./AddRole";
import EditRole from "./EditRole";

function RoleList() {
  const [roles, setRoles] = useState({ rolesDataAll: [] });
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowMOdal = () => setShowModal(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditMOdal = () => setShowEditModal(true);
  const [editRoles, setEditRole] = useState("");

  useEffect(() => {
    let roleData = { ...roles };
    roleData.rolesDataAll = getRolePermissionData();
    setRoles(roleData);
  }, [setRoles]);
  // Delete Role
  const deleteRole = (index) => {
    const roleData = { ...roles };
    roleData.rolesDataAll.splice(index, 1);
    setRoles(roleData);
    alert("Role Deleted.");
  };
  const onSubmitAddRole = (data) => {
    const roleData = { ...roles };
    roleData.rolesDataAll.unshift(data);
    setRoles(roleData);
    alert("Role added.");
    handleCloseModal();
  };
  const editRole = (item) => {
    setEditRole(item);
    handleShowEditMOdal();
  };
  const onSubmitEditRole = (data) => {
    const roleData = { ...roles };
    for (let index = 0; index < roleData.rolesDataAll.length; index++) {
      if (roleData.rolesDataAll[index].id === data.id) {
        roleData.rolesDataAll[index] = data;
      }
    }
    setRoles(roleData);
    setShowEditModal(false);
    console.log("roleData", roleData);
    alert("Success! role updated.");
  };
  return (
    <>
      <div>
        <div className="float-left">
          <h2> Role Lists</h2>
        </div>
        <div className="float-right">
          <button className="btn btn-success" onClick={handleShowMOdal}>
            + New Role
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Permissions</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {roles.rolesDataAll.length > 0 ? (
            roles.rolesDataAll.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.permissions.length > 0 ? (
                      item.permissions.map((permission, index2) => (
                        <span className="badge badge-default" key={index2}>
                          {" "}
                          {permission.name}{" "}
                        </span>
                      ))
                    ) : (
                      <span className="badge badge-default">No data.</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => editRole(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger "
                      onClick={() => deleteRole(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="text-danger text-center">
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={true}
        centered
      >
        <AddRole
          onSubmit={onSubmitAddRole}
          onClose={handleCloseModal}
        ></AddRole>
      </Modal>
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={true}
        centered
      >
        <EditRole
          role={editRoles}
          onSubmitEdit={onSubmitEditRole}
          onCloseEdit={handleCloseEditModal}
        ></EditRole>
      </Modal>
    </>
  );
}

export default RoleList;
