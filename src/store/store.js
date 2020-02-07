import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import slides from "../features/slides/images/";

// When we use Context as global store,
// you have to pass initialState to useReducer
// instead of state = initialState in the reducer
// because the initial value sometimes needs to depend on props
// we setup the initialState in one place
// (inside the functional component that calls useReducer)
// https://reactjs.org/docs/hooks-reference.html#specifying-the-initial-state
const initialState = {
  currentIndex: 0,
  slides: slides
};

const StateContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
