import { ActionSheetIOS } from "react-native";

export interface ICounter {
  counter: number;
}

export const InitialState: ICounter = {
  counter: 0,
}

export const UserReducer = (state: ICounter, action: { type: any; }) =>{
  switch(action.type){
    case 'SetCounter':
      return {counter: state.counter + 1};
      default:
      return state
    }
  }