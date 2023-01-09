import Clothes from "../models/Clothes";

export class UserState {
  clothes: Clothes | undefined;
}

export enum userActionType {
  login = "login",
  logout = "logout",
}

// how the action will go, to prevent bugs
export interface userAction {
  type: userActionType;
  payload?: any;
}

export function login(user: Clothes) {
  return {
    type: userActionType.login,
    payload: user,
  };
}

export function logout() {
  return {
    type: userActionType.logout,
    payload: null,
  };
}

export function userReducer(
  prevUser: UserState = new UserState(),
  action: any
) {
  const newClothes = { ...prevUser };
  switch (action.type) {
    case userActionType.login:
      newClothes.clothes = action.payload;
      break;
    case userActionType.logout:
      newClothes.clothes = undefined;
  }
  return newClothes;
}
