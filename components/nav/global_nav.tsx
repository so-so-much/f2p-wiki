import Link from "next/link";
import { ContentBlock } from "../content_block/content_block";
import styles from "./global_nav.module.css";

const LINKS: { label: string; href: string }[] = [
  { label: "Hiscores", href: "#" },
  { label: "Current", href: "#" },
  { label: "Records", href: "#" },
  { label: "EHP", href: "#" },
  { label: "Clans", href: "#" },
  { label: "Links", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "About Us/Donate", href: "#" },
  { label: "FAQs", href: "#" },
];

export function GlobalNav() {
  return (
    <div className={styles.container}>
      {LINKS.map(({ label, href }, index) => (
        <ContentBlock key={index}>
          <Link href={href}>{label}</Link>
        </ContentBlock>
      ))}
    </div>
  );
}
