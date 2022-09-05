export interface ICounter {
  counter: number;
}

export const InitialState: ICounter = {
  counter: 7,
}

export const UserReducer = (state: ICounter) =>{
  return {counter: state.counter + 1} ;
  }