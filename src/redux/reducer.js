import {act} from 'react-test-renderer';

const initialState = {
  toggleModal: false,
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
