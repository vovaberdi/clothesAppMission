import { combineReducers, createStore } from "redux";

const keys = Object.keys(localStorage).filter(key => key.startsWith("shoes"));

const length = keys.length;

const initialStateSets = { count: length };

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

interface IState {
  clothing: IClothing[];
  sets: ISet[];
}

const initialState2: IState = {
  clothing: [],
  sets: []
};

const clothingReducer = (state = initialState2, action: any) => {
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

const rootReducer = combineReducers({ clothingReducer, clothes, setsReducer });

export default rootReducer;

