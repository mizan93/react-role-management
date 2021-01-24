import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import getUserData from "../../services/users/UserData";
import AssignRole from "./AssignRole";
import AssignRoleEdit from "./AssignRoleEdit";
function UserList() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowMOdal = () => setShowModal(true);
  const onclose = () => setShowModal(false);

  const handleCloseEditMOdal = () => setShowEditModal(false);
  const handleShowEditMOdal = () => setShowEditModal(true);
  const [users, setUsers] = useState({
    userDataAll: [],
  });
  const [editData, setEditData] = useState("");
  useEffect(() => {
    let userData = { ...users };
    userData.userDataAll = getUserData();
    setUsers(userData);
  }, [setUsers]);
  const assignRole = (data) => {
    const userData = { ...users };
    for (let index = 0; index < userData.userDataAll.length; index++) {
      if (userData.userDataAll[index].id === data.id) {
        userData.userDataAll[index] = data;
      }
    }
    setUsers(userData);
    setShowModal(false);
    alert("Success!  Role asigned.");
  };
  const assignRoleUpdate = (data) => {
    // console.log("data", data);

    const userData = { ...users };

    for (let index = 0; index < userData.userDataAll.length; index++) {
      const item = userData.userDataAll[index].id;
      if (item.id === data.id) {
        userData.userDataAll[index] = data;
      }
    }
    setUsers(userData);

    setShowEditModal(false);
    alert("Success!  User edited.");
  };
  const editeUser = (user) => {
    setEditData(user);
    handleShowEditMOdal();
  };
  const deleteUser = (index) => {
    const data = { ...users };
    data.userDataAll.splice(index, 1);
    setUsers(data);
    alert("User Deleted.");
  };

  // console.log(users)
  return (
    <>
      <div>
        <div className="float-left">
          <h2> User Lists</h2>
        </div>
        <div className="float-right">
          <button className="btn btn-success" onClick={handleShowMOdal}>
            
            + Assign Role
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>UserName</th>
            <th>role</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.userDataAll.length > 0 ? (
            users.userDataAll.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.role != null ? user.role.name : "-"}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => editeUser(user)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(index)}
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
        show={showEditModal}
        onHide={handleCloseEditMOdal}
        animation={true}
        centered
      >
        <AssignRoleEdit
          user={editData}
          onsubmitEdit={assignRoleUpdate}
          onCloseEidt={handleCloseEditMOdal}
        ></AssignRoleEdit>
      </Modal>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={true}
        centered
      >
        <AssignRole onsubmit={assignRole} onClose={onclose}></AssignRole>
      </Modal>
    </>
  );
}

export default UserList;
