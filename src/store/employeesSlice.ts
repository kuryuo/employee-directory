import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployeesApi, fetchEmployeeApi } from '../api/employeeApi';
import { Employee, EmployeeState } from '../types';

const initialState: EmployeeState = {
  employees: [],
  employee: null,
  loading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await fetchEmployeesApi();
  return response;
});

export const fetchEmployee = createAsyncThunk('employees/fetchEmployee', async (id: string) => {
  const response = await fetchEmployeeApi(id);
  return response;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка загрузки сотрудников';
      })
      .addCase(fetchEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        state.loading = false;
        state.employee = action.payload;
      })
      .addCase(fetchEmployee.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка загрузки данных сотрудника';
      });
  },
});

export default employeeSlice.reducer;
