import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yafu",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="bg-[#FE2324] min-h-screen flex flex-col flex-1 items-center justify-center">
        <h1 className="text-2xl text-black">Estamos cocinando...</h1>
      </body>
    </html>
  );
}
