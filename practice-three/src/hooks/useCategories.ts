import { useContext } from "react";

import { CategoriesContext } from "../contexts/CategoriesContext";

export const useCategories = () => useContext(CategoriesContext);
