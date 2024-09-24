import Image from "next/image";

import styles from "./book.module.css";
import { BookSearchResult } from "@/app/hooks/useGetBooks";
import Rating from "./Rating/Rating";

interface Props {
  volume: BookSearchResult;
}

const Book = ({ volume }: Props) => {
  const { volumeInfo } = volume;
  return (
    <div className={styles.container}>
      {volumeInfo.imageLinks ? (
        <Image
          src={volumeInfo.imageLinks?.smallThumbnail}
          width="200"
          height="200"
          alt={volumeInfo.title}
        />
      ) : (
        <div className={styles.noImage}>
          <i>No image available</i>
        </div>
      )}
      <p className={styles.title}>{volumeInfo.title}</p>
      <Rating rating={volumeInfo.averageRating} />
    </div>
  );
};

export default Book;
