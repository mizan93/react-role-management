// import axios from 'axios'
export default  function getRolePermissionData() {
  // fetch all data from api
  //  let data=[]
  //  await axios.get('url').then(res=>{
  //      data=res.data.data
  //  })
  //  return data
  return [
    {
      id: 1,
      name: "admin",
      permission: [],
    },
    {
      id: 2,
      name: "super_admin",
      permission: [{
        id: 5,
        name: "crate_account",
      },
      {
        id: 6,
        name: "edit_account",
      },
      {
        id: 7,
        name: "view_account",
      },
      {
        id: 8,
        name: "delete_account",
      },],
    },
    {
      id: 3,
      name: "cashier",
      permission: [
        {
          id: 5,
          name: "crate_account",
        },
        {
          id: 6,
          name: "edit_account",
        },
        {
          id: 7,
          name: "view_account",
        },
        
      ],
    },
  ];
}
