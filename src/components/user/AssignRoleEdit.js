import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import getRoleMasterData from "../../services/roles/RoleMasterData";
// import getUserDataHasNoRole from "../../services/users/UserHasNoRole";

const AssignRoleEdit = (props) => {
  //   const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  //   const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const { user } = props;
  // console.log('props', props)
  //   const changeUser = (e) => {
  //     setUser(e.target.value);
  //   };

  const changeRole = (e) => {
    setRole(e.target.value);
  };
  const submitRole = () => {
    if (role === "") {
      alert("Please fill all the values");
      return false;
    }
    // const userData = JSON.parse(user);
    const roleData = JSON.parse(role);
    const data = {
      id: user.id,
      username: user.username,
      name: user.name,
      password: user.password,
      role: {
        id: roleData.id,
        name: roleData.name,
      },
    };

    props.onsubmitEdit(data);
  };
  //   console.log("props", props);

  useEffect(() => {
    // setUsers(getUserDataHasNoRole);
    setRoles(getRoleMasterData);
    setRole(JSON.stringify(user.role))
  }, []);
//   console.log("props", props);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assign Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Select User
            </Form.Label>
            <Col sm="6">
              <Col sm="6">{user.name}</Col>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              Select Role
            </Form.Label>
            <Col sm="6">
              <select
                className="form-control"
                value={role}
                onChange={changeRole}
                required
              >
                <option  value="">
                  Please select a role
                </option>
                {roles.map((item, index) => (
                  <option value={JSON.stringify(item)} key={index} >
                    {item.name}
                  </option>
                ))}
              </select>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onCloseEidt} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={submitRole} className="btn btn-success" type="submit">
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default AssignRoleEdit;
