import { TopBar } from "@components";

const Home = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen">
      <TopBar />

      <div className="mt-[60px] w-screen max-w-[1150px] flex self-center justify-between flex-auto">
        <div className="">
          <div className="overflow-x-hidden overflow-y-auto overscroll-contain fixed top-[60px] bottom-0 w-[356px]">
            Nav
          </div>
        </div>

        <div className="mr-[16px] ml-[16px] w-[692px] relative max-w-[692px] py-[24px]">
          Posts
        </div>
      </div>
    </div>
  );
};

export default Home;
