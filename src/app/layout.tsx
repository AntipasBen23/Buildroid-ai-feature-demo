import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SimTwin Dashboard | Buildroid AI",
  description: "Real-time simulation confidence and deployment monitoring for construction robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}