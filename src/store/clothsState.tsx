import { combineReducers, createStore } from "redux";
import { MySet, Clothing } from '../models/Types';

type SetsState = MySet[];
type ClothesState = Clothing[];

// type SetAction =
//   | { type: 'ADD_SET'; name: string , clothingIds: number}
//   | { type: 'SELECT_SET'; id: number }
//   | { type: 'DESELECT_SET'; id: number };

type ClothingAction = { type: 'ADD_CLOTHING'; clothing: Clothing };

// type Action = SetAction | ClothingAction;

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

// interface Clothing {
//   id: number;
//   color: string;
//   size: string;
//   type: string;
//   brand?: string;
//   timestamp?: Date;
//   selected?: boolean;
// }
// const setu = localStorage.getItem('clothing');


// const numberOfSets = setu.filter((set:any) => set.type === 'set').length;

const initialStateSets = { count: 0 };

export function setsReducer(state = initialStateSets, action:any) {
    switch (action.type) {
        case 'ADD_SET':
            return { ...state, count: state.count + 1 };
        case 'REMOVE_SET':
            return { ...state, count: state.count - 1 };
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
      case 'REMOVE_CLOTHING':
        return { clothes: state.clothes.filter((clothing:any) => clothing.id !== action.payload.clothingId) };
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
export const deleteAllItems = () => {
  return {
    type: 'DELETE_ALL_ITEMS'
  };
};

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
      case 'DELETE_ALL_ITEMS':
        return {
          ...state,
          clothing: []
        };
      default:
        return state;
    }
  };

// export default clothingReducer;

const rootReducer = combineReducers({ clothingReducer, clothes, setsReducer });

export default rootReducer;

