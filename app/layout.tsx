import type { Metadata } from "next";
import "./globals.css";
import "the-new-css-reset/css/reset.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "F2P OSRS Wiki",
  description:
    "F2P.wiki is an open source Old School RuneScape hiscores for Free-to-play players. It also includes EHP tracking, information about meta changes, and various F2P Old School RuneScape tools.",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
