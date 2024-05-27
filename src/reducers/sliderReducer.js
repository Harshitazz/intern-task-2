// reducers/sliderReducer.js
import { SET_SLIDER_VALUE } from '../actions/actionTypes';

const initialState = {
  sliderValue: 50 // Initial slider value
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDER_VALUE:
      return {
        ...state,
        sliderValue: action.payload
      };
    default:
      return state;
  }
};

export default sliderReducer;
