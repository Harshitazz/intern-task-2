// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeSlice';
import sliderReducer from './reducers/sliderReducer'; // Your slider reducer file

// const rootReducer = combineReducers({
//   slider: sliderReducer
// });

const store = configureStore({
  reducer: {
    theme: themeReducer,
    slider: sliderReducer
  },
});

// const store = createStore(rootReducer);

export default store;
