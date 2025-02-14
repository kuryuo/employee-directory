import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchEmployees } from "../store/employeesSlice";
import { RootState, AppDispatch } from "../store/store";
import { Employee } from "../types";

export const useEmployees = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading, error } = useSelector(
    (state: RootState) => state.employees
  );
  const [visibleEmployees, setVisibleEmployees] = useState<Employee[]>([]);
  const [page, setPage] = useState(1);
  const count = 10;

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(fetchEmployees({ page: 1, count: 100 }));
    }
  }, [dispatch, employees.length]);

  useEffect(() => {
    setVisibleEmployees(employees.slice(0, page * count));

    console.log("Загружено сотрудников:", employees.length);
    console.log("Видимых сотрудников:", visibleEmployees.length);
  }, [employees, page, visibleEmployees.length]);

  const loadMore = () => {
    if (!loading && visibleEmployees.length < employees.length) {
      setPage((prev) => prev + 1);
    }
  };

  return { employees: visibleEmployees, loading, error, loadMore };
};
