"use client";


import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function NewComponent({ children }) {
  const currentUser = useCurrentUser()
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div>
            <header className="text-center py-5 bg-blue-500 text-white">
              <h1 className="text-4xl">My Responsive </h1>
            </header>

            <nav className="bg-blue-100 p-5 block sm:flex justify-between">
              <Link
                href="#"
                className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded"
              >
                About
              </Link>
              <Link
                href="#"
                className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded"
              >
                Contact
              </Link>
              {currentUser ? (
                <Link
                  href="#"
                  className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  href="#"
                  className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded"
                >
                  Login
                </Link>
              )}
            </nav>

            <main className="p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
