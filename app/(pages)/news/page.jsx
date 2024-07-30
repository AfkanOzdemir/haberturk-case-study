import NewsSwiper from "@/components/swipers/NewsSwiper";
const Page = () => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-full flex">
        <div className="lg:w-[500px] bg-white hidden lg:flex  flex-col items-start justify-center px-10 relative space-y-3 border-r border-gray border-opacity-50">
          <span className="text-black text-lg font-poppins text-start opacity-50">
            {new Date().toLocaleDateString()}
          </span>
          <h1 className="w-full text-black font-abril text-6xl font-extrabold text-start">
            Bugün ne oldu?
          </h1>
          <p className="text-gray text-lg text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="w-3/4 absolute bottom-10 text-gray">
            Copyright © 2017 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
          </div>
        </div>
        <div className="w-full lg:w-[calc(100%-500px)] overflow-hidden flex-row bg-white">
          <NewsSwiper />
        </div>
      </div>
    </div>
  );
};

export default Page;
