import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from "react";
import { NewsContext } from "@/app/(pages)/layout";

const NewsBox = ({ item, index }) => {
    const { setPageNumber } = useContext(NewsContext);
    return (
        <div className="space-y-7" key={index}>
            <span className="font-bold text-sm text-start opacity-50">
                {item.hour} Saat Önce
            </span>
            <h2 className="font-bold text-2xl">{item.title}</h2>
            <Image
                src={item.image}
                alt="logo"
                width={360}
                height={200}
                layout="responsive"
                objectFit="cover"
            />
            <p className="text-gray line-clamp-3">{item.content}</p>
            <div>
                <Link
                    onClick={() => {
                        setPageNumber(index + 1);
                    }}
                    href={"newsDetail/"}
                    className="px-5 py-2 font-bold text-black border border-opacity-50 border-gray transition-all ease-in-out duration-300 hover:bg-primary-100  hover:text-white"
                >
                    Detay
                </Link>
            </div>
        </div>
    )
}

export default NewsBox