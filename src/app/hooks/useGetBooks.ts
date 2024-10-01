import { useEffect, useState } from "react";
import useGetData from "./swr/useGetData";

export interface GoogleBooksAPIResponse {
    kind: string;
    totalItems: number;
    items: BookSearchResult[];
  }

  export interface BookSearchResult {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
  }

  export interface VolumeInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    language?: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
  }

  interface Props {
    query: string;
  }
  

const useGetBooks = ({query}: Props) => {
  const [books, setBooks] = useState<GoogleBooksAPIResponse | null>(null);

  const { data, error } = useGetData<GoogleBooksAPIResponse>(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/books?name=${query}`,
    {shouldFetch: !!query}
  );

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);

  return { books, error };
};

export default useGetBooks;
