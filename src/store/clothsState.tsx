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
  console.log('Before:', state);
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


// function clothes(state: ClothesState = [], action: ClothingAction): ClothesState {
  
//   switch (action.type) {
//     case 'ADD_CLOTHING':
//       return [...state, action.clothing];
//     default:
//       console.log('ClothesBefore:', state, );
//       return state;
//   }
// }

const rootReducer = combineReducers({ sets, clothes });

export default rootReducer;

