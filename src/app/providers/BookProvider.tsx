import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import useGetBooks, { GoogleBooksAPIResponse } from "../hooks/useGetBooks";
import useDebounce from "../hooks/useDebounce";

interface BookContextProps {
  books: GoogleBooksAPIResponse | null;
  setSearchQuery: (query: string) => void;
}

export const BookContext = createContext({} as BookContextProps);

interface Props {
  children: ReactNode;
}

const BookProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { debouncedValue, setValue } = useDebounce(searchQuery);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery, setValue]);

  const { books } = useGetBooks({ query: debouncedValue });

  const value = useMemo(
    () => ({
      books,
      setSearchQuery,
    }),
    [books, setSearchQuery]
  );

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookProvider;
