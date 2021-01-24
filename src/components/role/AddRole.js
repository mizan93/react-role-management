import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AddRole = (props) => {
  const [role, setRole] = useState("");

  const changeRole = (e) => {
    setRole(e.target.value);
  };
  const submitRole = () => {
    if (role === "") {
      alert("Please enter role name.");
      return false;
    }
    const data = {
      id: 100,
      name: role,
      permission: [],
    };
    // console.log("data", data);
    props.onSubmit(data);
  };
  //   console.log("props", props);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Assign New Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Select User
            </Form.Label>
            <Col sm="6">
              <input
                className="form-control"
                value={role}
                onChange={changeRole}
                placeholder="Enter Role Name."
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onClose} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={submitRole} className="btn btn-success" type="submit">
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default AddRole;
