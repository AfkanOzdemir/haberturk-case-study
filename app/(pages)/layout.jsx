"use client";
import Sidebar from "@/components/Sidebar";
import "swiper/css";
import { createContext, useState, useEffect } from "react";

export const NewsContext = createContext({});

const Layout = ({ children }) => {
  const [currentNews, setCurrentNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const data = "/api/news.json";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(data)
        .then((response) => response.json())
        .then((data) => setCurrentNews(data));
    };
    fetchData();
  }, [setCurrentNews]);

  return (
    <NewsContext.Provider
      value={{
        currentNews,
        setCurrentNews,
        pageNumber,
        setPageNumber,
      }}
    >
      <main className="w-full flex h-screen overflow-hidden">
        <Sidebar />
        <div className="w-[calc(100%-4rem)]">{children}</div>
      </main>
    </NewsContext.Provider>
  );
};

export default Layout;
