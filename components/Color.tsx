import React from "react";
import styles from "./Color.module.scss";
import Tick from "./Tick";

interface ColorProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  props: {
    color: string;
    name: string;
    selected?: boolean;
  };
}

export default function Color({ props, ...elProps }: ColorProps) {
  return (
    <button {...elProps}style={{ background: props.color }} className={styles.color}>
      <Tick className={[styles.tick, props.selected ? styles.visible : ""].join(" ")} />
    </button>
  );
}
