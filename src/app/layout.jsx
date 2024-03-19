import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex",
  description: "A quick little Pokedex build",
  charset: "utf-8",
  content: "width=device-width",
  name: "viewport"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className, "bg-primary text-secondary"}>
        <main>
          <div>
            <Link href="/" className="contents"><h1 className="text-5xl text-center w-fit m-auto pt-10 pb-10 hover:underline" >Pokedex</h1></Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
