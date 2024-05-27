// actions/sliderActions.js
import { SET_SLIDER_VALUE } from './actionTypes';

export const setSliderValue = (value) => {
  return {
    type: SET_SLIDER_VALUE,
    payload: value
  };
};
