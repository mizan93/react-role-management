import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import getPermissonMasterData from "../../services/permissions/PermissonMasterData";
import { checkObjectInArray } from "../../services/utils/Helper";

const EditRole = (props) => {
  const [roleData, setRoleData] = useState({
    id: "",
    name: "",
    permission: [],
  });
  const [permissions, setPermissions] = useState({
    allPermissions: [],
  });
  const { role, onCloseEdit, onSubmitEdit } = props;
  const changeRole = (e) => {
    setRoleData(e.target.value);
  };
  const submitRole = () => {
    if (roleData.name === "") {
      alert("Please enter role name.");
      return false;
    }
    let selectedPermissions = [];
    permissions.allPermissions.forEach((item, index) => {
      if (item.isChecked) {
        selectedPermissions.push(item);
      }
    });
    const data = {
      id: roleData.id,
      name: roleData.name,
      permissions: selectedPermissions,
    };
    onSubmitEdit(data);
  };
  const checkedInArray = (item) => {
    return checkObjectInArray(item, roleData.permission, "id");
  };
  useEffect(() => {
    let roleDatanew = { ...roleData };
    roleDatanew.id = role.id;
    roleDatanew.name = role.name;
    roleDatanew.permission = role.permission;
    setRoleData(roleDatanew);
  }, [setRoleData]);
  useEffect(() => {
    let permissionData = { ...permissions };
    let getAllPermissonMasterData = getPermissonMasterData();
    getAllPermissonMasterData.forEach((item, index) => {
      item.isChecked = checkObjectInArray(item, role.permission, "id");
      permissionData.allPermissions.push(item);
    });
    setPermissions(permissionData);
  }, [setPermissions]);

  const checkPermission = (e, index) => {
    let permissionData = { ...permissions };
    const checkedStatus = e.target.checked;
    permissionData.allPermissions[index].isChecked = checkedStatus;
    setPermissions(permissionData);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Assign New Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Role
            </Form.Label>
            <Col sm="6">
              <input
                className="form-control"
                value={roleData.name}
                onChange={changeRole}
                placeholder="Enter Role Name."
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Permissions
            </Form.Label>
            <Col sm="6">
              {permissions.allPermissions.length > 0 ? (
                permissions.allPermissions.map((item, index) => (
                  <>
                    <label>
                      <input
                        key={index}
                        type="checkbox"
                        value={JSON.stringify(item)}
                        checked={item.isChecked ? true : false}
                        onChange={(e) => checkPermission(e, index)}
                      />
                      {item.name}
                    </label>
                    <br />
                  </>
                ))
              ) : (
                <p>No data found</p>
              )}
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onCloseEdit} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={submitRole} className="btn btn-success" type="submit">
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default EditRole;
