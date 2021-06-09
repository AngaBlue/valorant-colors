import React from "react";
import Image from "next/image";
import styles from "../../styles/components/layout/Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Image src="/logo.svg" alt="Logo" height={50} width={100} />
    </nav>
  );
}
