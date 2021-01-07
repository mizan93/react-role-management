import React, { useEffect, useState } from "react";
import getUserData from "../../services/users/UserData";

function UserList() {
  const [users, setusers] = useState([
    // {
    //   username: "sumon",
    //   name: "sumon ahmed",
    //   password: "000",
    //   role: "admin",
    // },
    // {
    //   username: "sumon1",
    //   name: "sumon ahmed",
    //   password: "111",
    //   role: "super_admin",
    // },
    // {
    //   username: "sumon3",
    //   name: "sumon ahmed",
    //   password: "111",
    //   role: null,
    // },
    // {
    //   username: "sumon4",
    //   name: "sumon ahmed",
    //   password: "111",
    //   role: "executive",
    // },
  ]);
  useEffect(() => {
    setusers(getUserData);
    // return () => {
    //   cleanup
    // }
  }, [setusers]);
  return (
    <>
      <h2> User Lists</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>UserName</th>
            <th>rolee</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.role != null ? user.role : "-"}</td>
                  <td>
                    <a className="btn btn-success" href="#">
                      Edit
                    </a>

                    <a className="btn btn-danger " href="#">
                      Delete
                    </a>
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

export default UserList;
