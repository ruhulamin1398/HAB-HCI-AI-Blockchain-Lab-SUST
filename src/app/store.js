import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import peopleReducer from '../features/people/peopleSlice';
import projectReducer from '../features/project/projectSlice';
import fooReducer from '../features/fooSlice';

 
const rootReducer = combineReducers({
    people: peopleReducer,
    todo: todoReducer,
    project: projectReducer,
    foo: fooReducer,
  });
  
  export const store = configureStore({
    reducer: rootReducer,
  });