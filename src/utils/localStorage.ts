export const loadFiltersFromLocalStorage = () => {
  const filters = localStorage.getItem("filters");
  return filters ? JSON.parse(filters) : {};
};

export const saveFiltersToLocalStorage = (filters: object) => {
  localStorage.setItem("filters", JSON.stringify(filters));
};
