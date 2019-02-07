export const actionCreator = {
  incrementCount: () => dispatch => {
    dispatch({ type: "INCREMENT" });
  },
  decrementCount: () => dispatch => {
    dispatch({ type: "DECREMENT" });
  }
};

const initialState = {
  count: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
  }
  return state;
};
