// import axios from 'axios'
export default  function getRoleMasterData() {
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
    },
    {
      id: 2,
      name: "super_admin",
    },
    {
      id: 3,
      name: "cashier",
    },
  ];
}
