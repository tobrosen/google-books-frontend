import Logo from "@/app/assets/logo-no-background.svg";
import styles from "./nav.module.css";
import Image from "next/image";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Image priority src={Logo} width={140} height={60} alt="Logo" />
      <div className={styles["user-actions"]}>
        <h2>Login</h2>
        <h2>Register</h2>
      </div>
    </div>
  );
};

export default Nav;
