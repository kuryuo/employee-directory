import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setFilters } from '../store/filterSlice';

export const useFilters = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  const [openFilter, setOpenFilter] = useState<number | null>(null);

  const updateFilters = (newFilters: typeof filters) => {
    dispatch(setFilters(newFilters));
  };

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    const updatedCategory = filters[category].includes(value)
      ? filters[category].filter(item => item !== value)
      : [...filters[category], value];

    updateFilters({ ...filters, [category]: updatedCategory });
  };

  const toggleDropdown = (index: number) => {
    setOpenFilter(openFilter === index ? null : index);
  };

  return {
    filters,
    updateFilters,
    toggleFilter,
    openFilter,
    toggleDropdown,
  };
};

