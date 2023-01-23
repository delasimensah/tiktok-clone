import { useState } from "react";
import Link from "next/link";
import { NavLink } from "@mantine/core";
import { RiHome4Fill, RiHome4Line } from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi2";

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

const NavLinks = () => {
  const [path, setPath] = useState("/");

  return (
    <div className="mb-[10px]">
      <NavLink
        component={Link}
        href="/"
        label="for you"
        icon={
          path === "/" ? (
            <RiHome4Line size={25} className="text-[#fe2c55]" />
          ) : (
            <RiHome4Fill size={25} />
          )
        }
        onClick={() => {
          setPath("/");
        }}
        classNames={{
          root: `p-[10px]`,
          label: `capitalize ${
            path === "/" ? "text-[#fe2c55]" : "text-black"
          } text-lg font-semibold`,
        }}
      />

      <NavLink
        component={Link}
        href="/following"
        label="following"
        icon={
          path === "/following" ? (
            <HiUsers size={25} className="text-[#fe2c55]" />
          ) : (
            <HiOutlineUsers size={25} />
          )
        }
        onClick={() => {
          setPath("/following");
        }}
        classNames={{
          root: `p-[10px]`,
          label: `capitalize ${
            path === "/following" ? "text-[#fe2c55]" : "text-black"
          } text-lg font-semibold`,
        }}
      />
    </div>
  );
};

export default NavLinks;
