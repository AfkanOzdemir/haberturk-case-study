import HomeSwiper from "@/components/swipers/HomeSwiper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen">
      <div className="w-full xl:w-8/12 flex bg-[url('/images/16x9/5.png')] bg-no-repeat bg-cover bg-center z-20
        before:content-[''] before:w-full before:xl:w-8/12 before:h-screen before:bg-primary-100 before:absolute before:-z-10 before:left-0 before:top-0 before:opacity-95
      ">
        <div className="w-16 h-screen">
          <div className="w-full h-1/6 relative flex items-center">
            <Image
              src="/icons/logo-white.svg"
              alt="logo"
              width={150}
              height={150}
              className="absolute left-10"
            />
          </div>
          <div className="w-full h-5/6 bg-white py-10 flex items-end justify-center">
            <span className="rounded-full w-3 h-3 bg-primary-100"></span>
          </div>
        </div>
        <div className="content w-full h-full px-5 lg:pl-16 flex flex-col items-start justify-center">
          <div className="w-full h-[calc(100%-6rem)] sm:ml-0 flex flex-col items-start justify-center space-y-5">
            <span className="text-white text-xl md:text-4xl font-bold font-abril">{new Date().toLocaleDateString()}</span>
            <h1 className="font-abril text-5xl sm:text-8xl md:text-[9rem] 2xl:text-[12rem] tracking-normal leading-none lg:leading-[10rem] font-bold">Bugün <br /> ne oldu?</h1>
            <p className="w-full sm:w-1/2 text-white text-sm pr-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text...</p>
            <div className="flex items-start justify-center space-x-5">
              <div className="h-full flex flex-col items-center justify-between">
                {
                  Array(6).fill().map((key, index) => (
                    <span key={index} className="w-11 border border-white"></span>
                  ))
                }
              </div>
              <Link href="/news" className="px-3 md:px-6 lg:px-10 py-2 lg:py-3 bg-white text-lg font-black text-primary-100">
                Görüntüle
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-4/6 lg:w-full flex items-start justify-center">
            <span className="w-full text-white text-sm  text-left">© 2017 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</span>
          </div>
        </div>
      </div>
      <div className="w-4/12 hidden xl:block bg-white">
        <HomeSwiper />
      </div>
    </main>
  );
}
