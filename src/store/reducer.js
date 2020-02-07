import { actionTypes } from "./actions";
import slides from "../features/slides/images/";

const initialState = {
  currentIndex: 0,
  slides: slides
};

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

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEXT:
      return next(state, action);
    case actionTypes.PREV:
      return prev(state, action);
    default:
      return state;
  }
};
