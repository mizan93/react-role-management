import getUserData from "../users/UserData";

export default function checkLogin(state) {
  let isLogedin = false;
  const userData = getUserData();
  userData.forEach((user) => {
    if (user.username === state.username && user.password === state.password) {
      isLogedin = true;
    }
  });
  return isLogedin;
}
