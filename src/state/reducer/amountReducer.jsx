const Reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdrawl") {
    return state - action.payload;
  } else {
    return state;
  }
};
export default Reducer;
