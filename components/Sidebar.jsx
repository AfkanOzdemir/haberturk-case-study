"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MegaSidebar from "./MegaSidebar";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-16 relative">
            <div className="w-16 h-screen bg-white fixed z-50 border-r border-[#D9D9D9]">
                <div className="w-full h-1/6 bg-primary-100 relative flex items-start justify-center p-3">
                    <Link href="/">
                        <Image
                            src="/icons/logo-white.svg"
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                <div className="w-full h-4/6 relative z-10 text-primary-100 text-center flex justify-center items-center">
                    <div className="cursor-pointer w-full" onClick={() => setIsOpen(!isOpen)}>
                        <span className={`h-10 w-[2px] inline-block transition-all ease-in-out duration-200 ${isOpen ? "bg-white -rotate-45 translate-x-1" : "bg-textColor"}`}></span>
                        <span className={`h-10 w-[2px] inline-block transition-all ease-in-out duration-200 ml-1 ${isOpen ? "bg-white rotate-45 -translate-x-1 ml-0" : "bg-textColor"}`}></span>
                    </div>
                </div>
                <div className="w-full h-1/6 relative z-10 flex items-center justify-center">
                    <span className={`rounded-full w-3 h-3 ${isOpen ? "bg-white" : "bg-primary-100"}`}></span>
                </div>
                <div className={`w-full ${isOpen ? "h-full" : "h-1/6 transition-all ease-in-out duration-200"} absolute top-0 bg-primary-100 -z-10`}></div>
            </div>
            <MegaSidebar isOpen={isOpen} />
        </div>
    );
};

export default Sidebar;