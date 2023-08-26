"use client";
import { SWRConfig } from "swr";

import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";
import fetcher from "../util/fetcher";
import SearchBar from "./search-bar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <div className="flex flex-col min-h-screen max-w-md m-auto items-center justify-center">
        <SearchBar />
        <Header />
        <NavBar />
        <main className="w-full p-5 dark:bg-slate-800 bg-slate-300 rounded-lg my-2">
          {children}
        </main>
        <Footer />
      </div>
    </SWRConfig>
  );
}
