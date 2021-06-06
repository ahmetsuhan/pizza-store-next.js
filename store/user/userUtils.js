import { http } from "@utils/customHTTP.js";
import { APIS } from "@utils/constants.js";

export const getAllUsers = () => {
  return http.get(APIS.APP_BASE_USERS_URL);
};

export const isEmailExist = (email) => {
  return getAllUsers()
    .then((res) => {
      return res.filter((user) => {
        return user.email === email;
      });
    })
    .catch((err) => {
      throw err;
    });
};

export const getUserByEmailAndPasword = async (email, password) => {
  const query = `email=${email}&password=${password}`;
  const res = http.get(`${APIS.APP_BASE_USERS_URL}?${query}`);
  const user = await res;
  return user;
};
// getUserByEmailAndPasword("Sincere@april.biz", 123456).then((res) =>
//   console.log(res)
// );
