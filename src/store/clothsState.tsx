import { combineReducers, createStore } from "redux";
import { Set, Clothing } from '../models/Types';

type SetsState = Set[];
type ClothesState = Clothing[];

type SetAction =
  | { type: 'ADD_SET'; name: string }
  | { type: 'SELECT_SET'; id: number }
  | { type: 'DESELECT_SET'; id: number };

type ClothingAction = { type: 'ADD_CLOTHING'; clothing: Clothing };

type Action = SetAction | ClothingAction;

function sets(state: SetsState = [], action: SetAction): SetsState {
  switch (action.type) {
    case 'ADD_SET':
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.name,
          clothingIds: [],
          selected: false
        }
      ];
    case 'SELECT_SET':
      return state.map(set => {
        if (set.id === action.id) {
          return {
            ...set,
            selected: true
          };
        }
        return set;
      });
    case 'DESELECT_SET':
      return state.map(set => {
        if (set.id === action.id) {
          return {
            ...set,
            selected: false
          };
        }
        return set;
      });
    default:
      return state;
  }
}

function clothes(state: ClothesState = [], action: ClothingAction): ClothesState {
  switch (action.type) {
    case 'ADD_CLOTHING':
      return [...state, action.clothing];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ sets, clothes });

export default rootReducer;


// import Clothes from "../models/Clothes";

// export class UserState {
//   clothes: Clothes | undefined;
// }

// export enum userActionType {
//   login = "login",
//   logout = "logout",
// }

// // how the action will go, to prevent bugs
// export interface userAction {
//   type: userActionType;
//   payload?: any;
// }

// export function login(user: Clothes) {
//   return {
//     type: userActionType.login,
//     payload: user,
//   };
// }

// export function logout() {
//   return {
//     type: userActionType.logout,
//     payload: null,
//   };
// }

// export function userReducer(
//   prevUser: UserState = new UserState(),
//   action: any
// ) {
//   const newClothes = { ...prevUser };
//   switch (action.type) {
//     case userActionType.login:
//       newClothes.clothes = action.payload;
//       break;
//     case userActionType.logout:
//       newClothes.clothes = undefined;
//   }
//   return newClothes;
// }
