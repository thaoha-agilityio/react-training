import { useContext } from "react";

import { BooksContext } from "../contexts/BooksContext";

export const useBooks = () => useContext(BooksContext);
