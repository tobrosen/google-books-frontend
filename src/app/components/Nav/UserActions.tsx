import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./nav.module.css";

const UserActions = () => {
  const { data: session } = useSession();
  return (
    <div className={styles["user-actions"]}>
      {session && <h2>My favorites</h2>}
      {session ? (
        <h2 onClick={() => signOut()}>Logout</h2>
      ) : (
        <h2 onClick={() => signIn()}>Login</h2>
      )}
    </div>
  );
};

export default UserActions;
