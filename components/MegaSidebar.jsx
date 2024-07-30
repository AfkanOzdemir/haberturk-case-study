import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavItems, SocialItems } from "@/constants";
const MegaSidebar = ({ isOpen }) => {

    return (
        <div className={`absolute transition-all ease-linear duration-200 w-screen md:w-[500px] left-16 z-40 ${isOpen ? "" : "transform translate-x-[-100%]"}  h-screen bg-primary-100`}>
            {isOpen && (
                <div className="w-96 h-full flex flex-col relative items-center justify-center">
                    <div className="w-3/4 h-[calc(100%-150px)] flex items-center justify-stat">
                        <ul className="space-y-5">
                            {NavItems.map((item, index) => (
                                <li key={index}>
                                    <Link className="transition-all ease-in-out text-4xl font-bold !text-white hover:text-primary-200" href={item.href}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-3/4 flex flex-col items-start justify-stat text-sm space-y-8">
                        <ul className="flex space-x-3 items-end">
                            {SocialItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href}>
                                        <Image src={item.icon} alt={item.title} width={item.size} height={item.size} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <span> Copyright © 2017 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MegaSidebar;
