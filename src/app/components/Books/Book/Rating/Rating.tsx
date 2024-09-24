import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./rating.module.css";

interface Props {
  rating?: number;
}

const Rating = ({ rating = 0 }: Props) => {
  const isDecimal = rating % 1 !== 0;
  return (
    <div className={styles.container}>
      {rating ? (
        <>
          {Array.from({ length: Math.floor(rating) }).map((_, i) => {
            return <FontAwesomeIcon key={i} icon={faStar} />;
          })}
          {isDecimal && <FontAwesomeIcon icon={faStarHalf} />}
          <span>{`( ${rating} )`}</span>
        </>
      ) : (
        <i>No rating</i>
      )}
    </div>
  );
};

export default Rating;
