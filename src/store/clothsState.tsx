import { combineReducers, createStore } from "redux";
import { Set, Clothing } from '../models/Types';

type SetsState = Set[];
type ClothesState = Clothing[];

type SetAction =
  | { type: 'ADD_SET'; name: string , clothingIds: number}
  | { type: 'SELECT_SET'; id: number }
  | { type: 'DESELECT_SET'; id: number };

type ClothingAction = { type: 'ADD_CLOTHING'; clothing: Clothing };

type Action = SetAction | ClothingAction;

// function sets(state: SetsState = [], action: SetAction): SetsState {
//   console.log('Before:', state);
//   switch (action.type) {
//     case 'ADD_SET':
//       return [
//         ...state,
//         {
//           id: state.length + 1,
//           name: action.name,
//           clothingIds: [],
//           selected: false
//         }
//       ];
//     case 'SELECT_SET':
//       return state.map(set => {
//         if (set.id === action.id) {
//           return {
//             ...set,
//             selected: true
//           };
//         }
//         return set;
//       });
//     case 'DESELECT_SET':
//       return state.map(set => {
//         if (set.id === action.id) {
//           return {
//             ...set,
//             selected: false
//           };
//         }
//         return set;
//       });
//     default:
//       return state;
//   }
// }



const initialState = {
  clothes: []
};

export function clothes(state = initialState, action: any) {
  switch (action.type) {
    case 'ADD_CLOTHING':
      return {
        ...state,
        clothes: action.payload,
      };
    default:
       console.log('ClothesBefore:', state, );
      return state;
  }
}


// function clothes2(state: ClothesState = [], action: ClothingAction): ClothesState {
  
//   switch (action.type) {
//     case 'ADD_CLOTHING':
//       return [...state, action.clothing];
//     default:
//       console.log('ClothesBefore:', state, );
//       return state;
//   }
// }




interface IClothing {
  id: number;
  brand: string;
  type: string;
  size: string;
  color: string;
  // timestamp: number;
}
interface ISet {
  // id: number;
  // name: string;
  items: IClothing[];
}

export const addClothing = (clothing: IClothing[]) => {
  return {
    type: 'ADD_CLOTHING_NEW',
    clothing
  }
}
export const addSet = (set: ISet[]) => {
  return {
    type: 'ADD_SET_NEW',
    set
  }
}

// reducer.ts
interface IState {
  clothing: IClothing[];
  sets: ISet[];
}

const initialStatei: IState = {
  clothing: [],
  sets: []
};

const clothingReducer = (state = initialStatei, action: any) => {
    console.log('Before:', state);
  switch (action.type) {
    case 'ADD_CLOTHING_NEW':
      return {
        ...state,
        clothing: [...state.clothing, ...action.clothing]
      };
    case 'ADD_SET_NEW':
        return {
          ...state,
          sets: [...state.sets, action.set]
        };
    default:
      return state;
  }
};

// export default clothingReducer;

const rootReducer = combineReducers({ clothingReducer, clothes });

export default rootReducer;

