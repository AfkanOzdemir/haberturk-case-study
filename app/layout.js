import { Poppins, Abril_Fatface } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Habertürk - Case Study",
  description: "Case Study for Habertürk website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className + "bg-white"}>{children}</body>
    </html>
  );
}
