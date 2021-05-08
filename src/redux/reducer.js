const initialState = {
  toggleModal: true,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_MODAL') {
    return {
      ...state,
      toggleModal: action.inputValue,
    };
  }
  return state;
};

export default reducer;
