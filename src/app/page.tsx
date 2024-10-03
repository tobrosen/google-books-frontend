import Books from "./components/Books/Books";
import Heading from "./components/Heading/Heading";
import MainContainer from "./components/MainContainer/MainContainer";
import Search from "./components/Search/Search";
import SubHeading from "./components/Subheading/SubHeading";
import styles from "./page.module.css";
import BookProvider from "./providers/BookProvider";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainContainer>
        <Heading text="Welcome to the Book Vault!" />
        <BookProvider>
          <div className={styles.wrapper}>
            <div className={styles.searchwrapper}>
              <SubHeading text="Search for your favorite books" />
              <Search />
            </div>
            <Books />
          </div>
        </BookProvider>
      </MainContainer>
    </div>
  );
}
