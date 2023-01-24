import Link from "next/link";
import { NavLink } from "@mantine/core";
import { RiHome4Fill, RiHome4Line } from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi2";
import { useRouter } from "next/router";

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
  const { pathname } = useRouter();

  return (
    <div className="mb-[10px]">
      {links.map((link, idx) => {
        return (
          <NavLink
            key={idx}
            component={Link}
            href={link.path}
            label={link.label}
            icon={
              pathname === link.path ? (
                <link.activeIcon size={25} className="text-primary" />
              ) : (
                <link.icon size={25} />
              )
            }
            classNames={{
              root: `p-[10px]`,
              label: `capitalize ${
                pathname === link.path ? "text-primary" : "text-black"
              } text-lg font-semibold`,
            }}
          />
        );
      })}
    </div>
  );
};

export default NavLinks;
