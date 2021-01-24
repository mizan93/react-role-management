import React, { useEffect, useState } from "react";
import getPermissonMasterData from "../../services/permissions/PermissonMasterData";

function PermissionList() {
  const [items, setitems] = useState([
    // {
    //   itemname: "sumon3",
    //   name: "sumon ahmed",
    //   password: "111",
    //   role: null,
    // },
    // {
    //   itemname: "sumon4",
    //   name: "sumon ahmed",
    //   password: "111",
    //   role: "executive",
    // },
  ]);
  useEffect(() => {
    setitems(getPermissonMasterData);
    // return () => {
    //   cleanup
    // }
  }, [setitems]);
  // console.log(items)
  return (
    <>
      <h2> Role Lists</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
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

export default PermissionList;
