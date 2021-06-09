import React from "react";
import styles from "../../styles/components/layout/Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.anga}
        href="https://anga.blue"
        rel="noopener noreferrer"
        target="_blank"
      >
        Made with ❤️ by AngaBlue
      </a>
      <a
        className={styles.derdf}
        href="https://www.twitch.tv/thederdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        Check out TheDERDF on
        <div className={styles.twitch}>
          <Image src="/twitch.svg" alt="Twitch Logo" height={20} width={20} />
        </div>
      </a>
    </footer>
  );
}
