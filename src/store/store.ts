import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeesSlice';
import filtersReducer from './filterSlice';


const store = configureStore({
  reducer: {
    employees: employeeReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
