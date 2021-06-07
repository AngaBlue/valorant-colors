import React from "react";
import styles from "./Color.module.scss";

interface ColorProps {
  color: string;
  name: string;
}

export default function Color({ color, name }: ColorProps) {
  return <button style={{ background: color }} className={styles.color} />;
}
