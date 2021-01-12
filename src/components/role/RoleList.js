import React, { useEffect, useState } from "react";
import getPermissonMasterData from "../../services/roles/RolePermissionData";

function RoleList() {
  const [roles, setRoles] = useState({ rolesDataAll: [] });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  // const [showEditModal, setShowEditModal] = useState(false);
  // const handleCloseEditModal = () => setShowModal(false);
  // const handleShowEditMOdal = () => setShowModal(true);
  useEffect(() => {
    let roleData={...roles}
    roleData.rolesDataAll=getPermissonMasterData()
    setRoles(roleData);
   
  }, [setRoles]);
  // Delete Role
  const deleteRole= (index) => {
    const roleData = { ...roles };
    roleData.rolesDataAll.splice(index, 1);
    setRoles(roleData);
    alert("Role Deleted.");
  };
  return (
    <>
      <h2> Role Lists</h2>
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
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.permission.map((i, k) => (
                      <span key={k}>
                        {i.name}
                        <br />
                      </span>
                    ))}
                  </td>{" "}
                  <td>
                    <button className="btn btn-success" >
                      Edit
                    </button>

                    <button className="btn btn-danger " onClick={()=>deleteRole(item)}>
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
      
    </>
  );
}

export default RoleList;
