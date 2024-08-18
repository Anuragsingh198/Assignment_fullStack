import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from './reducers';

const initialState = {
  Cards: [],
  card: null,
  Loading:false,
  error:null
  , search :'',
};
const Context = createContext(initialState);
export const useValue = () => {
  return useContext(Context);
};
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
