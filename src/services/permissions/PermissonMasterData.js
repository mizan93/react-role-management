// import axios from 'axios'
export default  function getPermissonMasterData() {
 // fetch all data from api
//  let data=[]
//  await axios.get('url').then(res=>{
//      data=res.data.data
//  })
//  return data
    return [
    {
      id: 1,
      name: "crate_product",
    },
    {
      id: 2,
      name: "edit_product",
    },
    {
      id: 3,
      name: "view_product",
    },
    {
      id: 4,
      name: "delete_product",
    },
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
    {
      id: 8,
      name: "delete_account",
    },
  ];
}
