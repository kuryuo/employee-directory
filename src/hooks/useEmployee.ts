import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEmployee } from "../store/employeesSlice";
import { RootState, AppDispatch } from "../store/store";

export const useEmployee = (id: string | undefined) => {
  const dispatch = useDispatch<AppDispatch>();
  const { employee, loading, error } = useSelector(
    (state: RootState) => state.employees
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchEmployee(id));
    }
  }, [id, dispatch]);

  return { employee, loading, error };
};
