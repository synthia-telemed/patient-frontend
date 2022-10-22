//EXAMPLE Rematch
export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload;
    }
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    }
  })
};

export const user = {
  state: {
    tokenJWT: ""
  },
  reducers: {
    setName: (state, payload) => payload,
    setToken: (state, payload) => payload,
    removeToken: (state, payload) => {
      state.tokenJWT = "";
      return state;
    }
  }
};
