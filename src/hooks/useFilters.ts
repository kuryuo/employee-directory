import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setFilters } from "../store/filterSlice";
import { useSearchParams } from "react-router-dom";
import {
  loadFiltersFromLocalStorage,
  saveFiltersToLocalStorage,
} from "../utils/localStorage";
import { FiltersState } from "../types";

export const useFilters = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openFilter, setOpenFilter] = useState<number | null>(null);

  useEffect(() => {
    const filtersFromLocalStorage = loadFiltersFromLocalStorage();
    if (Object.keys(filtersFromLocalStorage).length > 0) {
      dispatch(setFilters(filtersFromLocalStorage));
    }
  }, [dispatch]);

  useEffect(() => {
    const filterParams: FiltersState = { position: [], gender: [], stack: [] };
    for (const [key, value] of searchParams.entries()) {
      if (value) {
        filterParams[key as keyof FiltersState] = value.split(",");
      }
    }
    if (Object.keys(filterParams).length > 0) {
      dispatch(setFilters(filterParams));
    }
  }, [searchParams, dispatch]);

  const updateFilters = (newFilters: FiltersState) => {
    dispatch(setFilters(newFilters));
    saveFiltersToLocalStorage(newFilters);

    const newSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(newFilters)) {
      if (Array.isArray(value)) {
        newSearchParams.set(key, value.join(","));
      }
    }
    setSearchParams(newSearchParams);
  };

  const toggleFilter = (category: keyof FiltersState, value: string) => {
    const updatedCategory = filters[category].includes(value)
      ? filters[category].filter((item) => item !== value)
      : [...filters[category], value];

    updateFilters({ ...filters, [category]: updatedCategory });
  };

  const toggleDropdown = (index: number | null) => {
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
