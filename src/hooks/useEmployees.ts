import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEmployees } from '../store/employeesSlice';
import { RootState, AppDispatch } from '../store/store';

export const useEmployees = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading, error } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());  
  }, [dispatch]);

  return { employees, loading, error };
};
