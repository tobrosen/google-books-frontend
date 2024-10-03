"use client";

import Logo from "@/app/assets/logo-no-background.svg";
import styles from "./nav.module.css";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles.nav}>
      <Image priority src={Logo} width={200} height={60} alt="Logo" />
      <div className={styles["user-actions"]}>
        {session && <h2>My favorites</h2>}
        {session ? (
          <h2 onClick={() => signOut()}>Logout</h2>
        ) : (
          <h2 onClick={() => signIn()}>Login</h2>
        )}
      </div>
    </div>
  );
};

export default Nav;
