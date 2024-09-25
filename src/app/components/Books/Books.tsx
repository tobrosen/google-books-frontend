"use client";
import Book from "./Book/Book";
import styles from "./books.module.css";
import { useContext } from "react";
import { BookContext } from "@/app/providers/BookProvider";

const Books = () => {
  const { books } = useContext(BookContext);

  console.log(books?.items);
  if (!books) return <div>No result</div>;
  return (
    <div className={styles.container}>
      {books?.items?.map((volume) => {
        return <Book volume={volume} key={volume.id} />;
      })}
    </div>
  );
};

export default Books;
