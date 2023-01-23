import { useState, ReactNode, FC } from "react";
import { TopBar } from "@components";
import Link from "next/link";
import { NavLink, Button, Avatar } from "@mantine/core";
import { RiHome4Fill, RiHome4Line } from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi2";

type LayoutProps = {
  children: ReactNode;
};

const links = [
  {
    icon: RiHome4Line,
    activeIcon: RiHome4Fill,
    label: "for you",
    path: "/",
  },
  {
    icon: HiOutlineUsers,
    activeIcon: HiUsers,
    label: "following",
    path: "/following",
  },
];

const Layout: FC<LayoutProps> = ({ children }) => {
  const [path, setPath] = useState("/");

  return (
    <div className="flex flex-col justify-start min-h-screen">
      <TopBar />

      <div className="mt-[60px] w-screen max-w-[1150px] flex self-center justify-between flex-auto">
        <div className="">
          <div className="overflow-x-hidden overflow-y-auto overscroll-contain fixed top-[60px] bottom-0 w-[356px] pt-[20px] pb-[26px] pr-0 min-h-full flex flex-col items-stretch divide-y">
            <div className="mb-[10px]">
              {links.map((link, idx) => {
                console.log({ path });
                return (
                  <NavLink
                    key={idx}
                    component={Link}
                    href={link.path}
                    label={link.label}
                    icon={
                      link.path === path ? (
                        <link.activeIcon size={25} className="text-[#fe2c55]" />
                      ) : (
                        <link.icon size={25} />
                      )
                    }
                    onClick={() => {
                      setPath(link.path);
                    }}
                    classNames={{
                      root: `p-[10px]`,
                      label: `capitalize ${
                        link.path === path ? "text-[#fe2c55]" : "text-black"
                      } text-lg font-semibold`,
                    }}
                  />
                );
              })}
            </div>

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
                  return (
                    <NavLink
                      icon={
                        <Avatar color="cyan" radius="xl" size="md">
                          MK
                        </Avatar>
                      }
                      key={idx}
                      label="delanomad"
                      description="delanomad2"
                      classNames={{
                        root: "py-1 px-0",
                        label: `font-semibold text-base`,
                        description: `text-xs font-light`,
                      }}
                    />
                  );
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
    </div>
  );
};

export default Layout;
