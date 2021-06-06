import { userActionTypes } from "./userTypes";

export const getUsers = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const resData = await res.json();

    dispatch({ payload: resData, type: userActionTypes.GET_USERS });
  };
};

export const setCurrentUser = (user) => {
  console.log(user);
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
// getUserByEmailAndPasword("Sincere@april.biz", 123456).then((res) =>
//   console.log(res)
// );
