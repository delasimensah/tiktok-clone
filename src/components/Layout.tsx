import { ReactNode, FC } from "react";
import { NavLinks, AccountCard } from "@components";
import { Button } from "@mantine/core";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mt-[60px] w-screen max-w-[1150px] flex self-center justify-between flex-auto">
      <div>
        <div className="overflow-x-hidden overflow-y-auto overscroll-contain fixed top-[60px] bottom-0 w-[356px] pt-[20px] pb-[26px] pr-0 min-h-full flex flex-col items-stretch">
          <NavLinks />

          <div className="pt-[20px] pb-[24px] px-[10px] space-y-5 ">
            <p className="text-[#b0b1b4] font-light">
              Log in to follow creators, like videos, and view comments.
            </p>
            <Button
              fullWidth
              variant="outline"
              className="border-[#fe2c55] hover:bg-[#fff3f5] text-[#fe2c55]"
              size="lg"
            >
              Log in
            </Button>
          </div>

          <div className="pt-[16px] space-y-3">
            <p className="text-sm">Suggested accounts</p>

            <div>
              {new Array(5).fill(0).map((item, idx) => {
                return <AccountCard key={idx} />;
              })}
            </div>
          </div>

          {/* <div>discover</div> */}

          {/* <div>footer</div> */}
        </div>
      </div>

      <div className="mr-[16px] ml-[16px] w-[692px] relative max-w-[692px] py-[24px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
