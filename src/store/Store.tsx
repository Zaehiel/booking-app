import React, { createContext, useReducer, useContext} from 'react';
import { Reducer, initialState, Store } from './Reducer';

export const GlobalContext = createContext<Store>({ state: initialState, dispatch: () => null });

export const useStoreContext = () => useContext(GlobalContext);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return <GlobalContext.Provider value={{ state, dispatch }} children={children} />;
  };