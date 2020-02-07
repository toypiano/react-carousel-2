import { actionTypes } from "./actions";

const next = (state, action) => {
  return {
    ...state,
    currentIndex: (state.currentIndex + 1) % state.slides.length
  };
};

const prev = (state, action) => {
  return {
    ...state,
    currentIndex:
      (state.currentIndex - 1 + state.slides.length) %
      state.slides.length
  };
};

const goto = (state, action) => {
  return {
    ...state,
    currentIndex: action.payload
  };
};
// no state = initialState convention here.
// because this reducer is for "useReducer" hook.
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEXT:
      return next(state, action);
    case actionTypes.PREV:
      return prev(state, action);
    case actionTypes.GOTO:
      return goto(state, action);
    default:
      return state;
  }
};

export default reducer;
