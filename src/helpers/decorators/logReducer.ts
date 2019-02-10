export const logReducer = <State, Action>(
  reducer: (state: State, action: Action) => State
) => (state: State, action: Action) => {
  console.group();
  console.log("State:", state);
  console.log("Action:", action);

  const result = reducer(state, action);

  console.log("NextState:", result);
  console.groupEnd();

  return result;
};
