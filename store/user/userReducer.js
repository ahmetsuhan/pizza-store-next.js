import { userActionTypes } from "./userTypes";

const initialState = {
  users: [],
  currentUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export { userReducer };
