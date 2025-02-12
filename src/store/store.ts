import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeesSlice';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;
