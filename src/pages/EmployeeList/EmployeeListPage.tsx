import { useEmployees } from "../../hooks/useEmployees";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Filters from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import EmployeeList from "../../components/EmployeesList/EmployeesList";
import { useFilters } from "../../hooks/useFilters";
import { useRef, useEffect } from "react";
import { Employee } from "../../types";

const EmployeeListPage = () => {
  const { employees, loading, error, loadMore } = useEmployees();
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { filters } = useFilters();

  const crumbs = [
    { label: "Главная", path: "/" },
    { label: "Список сотрудников", path: "/" },
  ];

  useEffect(() => {
    const currentRef = observerRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading) {
            loadMore();
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loading, loadMore]);

  const filterEmployees = (employees: Employee[]) => {
    return employees.filter((employee) => {
      const matchesPosition =
        filters.position.length === 0 ||
        filters.position.includes(employee.position);
      const matchesGender =
        filters.gender.length === 0 || filters.gender.includes(employee.gender);
      const matchesStack =
        filters.stack.length === 0 ||
        employee.stack.some((tech) => filters.stack.includes(tech));

      return matchesPosition && matchesGender && matchesStack;
    });
  };

  if (loading && employees.length === 0) return <p>Загрузка сотрудников...</p>;
  if (error) return <p>{error}</p>;

  const filteredEmployees = filterEmployees(employees);

  return (
    <div>
      <Header />
      <Breadcrumbs crumbs={crumbs} />
      <Filters />
      <EmployeeList employees={filteredEmployees} />
      <div
        ref={observerRef}
      />
      {loading && <p>Загрузка...</p>}
    </div>
  );
};

export default EmployeeListPage;
