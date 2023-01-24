import { ReactNode, FC } from "react";
import { NavLinks, Accounts } from "@components";
import { Button } from "@mantine/core";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const user = "Delasi";

  return (
    <div className="mt-[60px] w-screen max-w-[1150px] flex self-center justify-between flex-auto">
      <div className="">
        <div className="overflow-x-hidden overflow-y-auto overscroll-contain fixed top-[60px] bottom-0 w-[356px] pt-[20px] pb-[26px] pr-0 flex flex-col items-stretch">
          <NavLinks />

          {!user && (
            <div className="pt-[20px] pb-[24px] px-[10px] space-y-5 ">
              <p className="text-[#b0b1b4] font-light">
                Log in to follow creators, like videos, and view comments.
              </p>
              <Button
                fullWidth
                variant="outline"
                className="border-primary hover:bg-primaryLight text-primary"
                size="lg"
              >
                Log in
              </Button>
            </div>
          )}

          <Accounts title="Suggested accounts" />

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
