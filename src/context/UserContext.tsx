import React, { createContext, useReducer} from 'react';
import { UserReducer, InitialState, ICounter } from './UserReducer';

export interface IValue {
  state: ICounter,
  dispatch: any
}

export const UserContext = createContext<ICounter>({counter: 0});

export default ({children} : any) => {
  const [state, dispatch] = useReducer(UserReducer, InitialState);
  return (
    <UserContext.Provider value={{state, dispatch} as IValue as any} >
      {children}
    </UserContext.Provider>
  )
}