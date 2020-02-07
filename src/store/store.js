import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const preloadedState = {};
const StateContext = createContext(preloadedState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, preloadedState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
