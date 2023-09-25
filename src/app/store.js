import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import peopleReducer from '../features/people/peopleSlice';

 
const rootReducer = combineReducers({
    people: peopleReducer,
    todo: todoReducer,
  });
  
  export const store = configureStore({
    reducer: rootReducer,
  });