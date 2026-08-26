import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MockMarket",
  description: "Marketplace web app with Telegram bot"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
