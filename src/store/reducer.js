import { actionTypes } from "./actions";

const next = (state, action) => {
  return {
    ...state,
    currentIndex: (state.currentIndex + 1) % state.slides.length,
    // not true for the type "NEXT" which is fired by user-click
    isPlaying: action.type === actionTypes.PROGRESS
  };
};

const prev = (state, action) => {
  return {
    ...state,
    currentIndex:
      (state.currentIndex - 1 + state.slides.length) %
      state.slides.length,
    isPlaying: false
  };
};

const goto = (state, action) => {
  return {
    ...state,
    currentIndex: action.payload,
    isPlaying: false
  };
};

const play = (state, action) => {
  return {
    ...state,
    isPlaying: true
  };
};

const pause = (state, action) => {
  return {
    ...state,
    isPlaying: false
  };
};

// no state = initialState convention here.
// because this reducer is for "useReducer" hook.
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PROGRESS:
    case actionTypes.NEXT:
      return next(state, action);
    case actionTypes.PREV:
      return prev(state, action);
    case actionTypes.GOTO:
      return goto(state, action);
    case actionTypes.PLAY:
      return play(state, action);
    case actionTypes.PAUSE:
      return pause(state, action);
    default:
      return state;
  }
};

export default reducer;
