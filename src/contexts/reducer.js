export const reducer = (state, action) => {
  switch(action.type) {
    case "SOME_CASE":
      return {
        ...state,
        some_state: !state.some_state
      }
    default:
      return state;
  };
};

export const initialState = {
  some_state: false
};