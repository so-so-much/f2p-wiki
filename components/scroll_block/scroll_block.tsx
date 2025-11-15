import type { PropsWithChildren } from "react";
import styles from "./scroll_block.module.css";
import classNames from "classnames";

export function ScrollBlock({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <div className={styles.end} />
      <div className={styles.content}>{children}</div>
      <div className={classNames(styles.end, styles.flipped)} />
    </div>
  );
}
