import React from 'react';
import { connect } from 'react-redux';
import { setSliderValue } from '../actions/sliderActions';
import './CustomSlider.css'

const CustomSlider = ({ sliderValue, setSliderValue, onSliderChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue); // Dispatch action to update slider value
    onSliderChange(newValue); // Call the callback function to pass the slider value to the parent
  };

  return (
    <div className="custom-slider-container my-8 ">
    <input 
      type="range" 
      min="0" 
      max="100" 
      value={sliderValue} 
      onChange={handleChange} 
      className="custom-slider  w-[90%] sm:w-[80%] "
      style={{'--value': sliderValue}} // Set dynamic CSS variable based on slider value

    />
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sliderValue: state.slider.sliderValue
  };
};

const mapDispatchToProps = {
  setSliderValue
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSlider);
