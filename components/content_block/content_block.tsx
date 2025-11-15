import type { PropsWithChildren } from "react";
import styles from "./content_block.module.css";

export function ContentBlock({ children }: PropsWithChildren) {
  return <div className={styles.contentBlock}>{children}</div>;
}
