import React, { useState } from "react";
import CustomSlider from "../components/CustomSlider";
import Intro from "../components/Intro";
import ToggleSwitch from "../components/ToggleSwitch";
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import Discount from "../components/Discount";
import  DarkMode from "../components/DarkMode";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../reducers/themeSlice';

function Pricing() {
  const [sliderValue, setSliderValue] = useState(50);
  const [isMonthly, setIsMonthly] = useState(true); // State for toggle switch

  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);

  
  };
  const handleToggleChange = (checked) => {
    setIsMonthly(checked);
  };

  const handleDarkToggleChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
    <DarkMode  checked={darkMode} onChange={handleDarkToggleChange}/>
    <div className="flex justify-center items-center h-full w-full my-10 ">
     
      <div className="  items-center ">
        <Intro />
        <div className="my-4 bg-white dark:bg-gray-700  w-[90%] min-[375px]:w-[100%] m-auto h-full sm:h-1/2 rounded-lg shadow-lg items-center justify-center">
          <div className="items-center justify-center text-center border-5 border-[hsl(230, 100%, 99%)] my-6">
            <div className="block justify-center min-[375px]:flex min-[375px]:justify-around pt-8 items-center" style={{ color: 'hsl(225, 20%, 60%)' }}>
              <p className="font-manrope tracking-[2px] font-bold">100k PageViews</p>
              <div className="hidden min-[375px]:flex items-center justify-center ">
                <span className="text-4xl font-bold text-moneycolour dark:text-white" >${sliderValue}.00</span>
                <p >/month</p>
              </div>
            </div>
          </div>
          <CustomSlider onSliderChange={handleSliderChange} />
          <div className="flex min-[375px]:hidden items-center justify-center ">
                <span className="text-2xl font-bold" style={{ color: 'hsl(227, 35%, 25%)' }}>${sliderValue}.00</span>
                <p >/month</p>
              </div>

          <div className="flex justify-end mx-2 min-[375px]:mx-6 items-center text-small-size min-[375px]:text-xs my-6">
            <p className="font-manrope min-content-width min-[375px]:max-content-width text-tahiti" >Monthly Billing</p>
            <ToggleSwitch isChecked={isMonthly} onToggle={handleToggleChange} />
            <p className="font-manrope min-content-width min-[375px]:max-content-width text-tahiti">Yearly Billing</p>
            <Discount/>
          </div>

          <div className="block min-[375px]:flex items-center py-8 justify-center border-t border-[hsl(174, 86%, 45%)] text-center min-[375px]:text-unset">
            <div className="m-auto">
            <ul className="list-none py-4">
                <li className="flex items-center justify-center min-[375px]:justify-normal">
                  <DoneIcon className=" mr-2" style={{ color: 'hsl(174, 86%, 45%)' }} />
                  <span className="font-manrope text-sm text-tahiti">Unlimited websites</span>
                </li>
                <li className="flex items-center justify-center min-[375px]:justify-normal">
                  <DoneIcon className="mr-2" style={{ color: 'hsl(174, 86%, 45%)' }}  />
                  <span className="font-manrope text-sm text-tahiti">100% data ownership</span>
                </li>
                <li className="flex items-center justify-center min-[375px]:justify-normal">
                  <DoneIcon className="mr-2  "style={{ color: 'hsl(174, 86%, 45%)' }}  />
                  <span className="font-manrope text-sm text-tahiti">Email reports</span>
                </li>
              </ul>
            </div>
            <Button variant="contained" class="bg-dblue text-white rounded-full px-8 py-2 m-auto">Start a Trial</Button>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Pricing;
