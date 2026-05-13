import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "じろう塾 | 英検・大学受験対策",
  description: "英語嫌い向けの英検・大学受験対策のオンライン英語塾",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>{children}</body></html>;
}
