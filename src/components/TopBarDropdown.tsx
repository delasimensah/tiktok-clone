import { Menu, Switch, ActionIcon, Avatar } from "@mantine/core";
import { AiOutlineMore } from "react-icons/ai";
import {
  MdOutlineKeyboardAlt,
  MdOutlineDarkMode,
  MdPersonOutline,
  MdOutlineSettings,
  MdHelpOutline,
  MdOutlineLogout,
  MdOutlineLanguage,
} from "react-icons/md";
import { useRouter } from "next/router";

const ICON_SIZE = 20;

const TopBarDropdown = () => {
  const user = null;
  const username = "delanomad";
  const { push } = useRouter();

  return (
    <Menu
      trigger="hover"
      width={250}
      openDelay={100}
      closeDelay={400}
      radius="md"
      classNames={{
        dropdown: "px-0",
        item: "rounded-none font-medium text-md",
      }}
    >
      <Menu.Target>
        {user ? (
          <Avatar radius="xl" className="cursor-pointer" />
        ) : (
          <ActionIcon variant="transparent">
            <AiOutlineMore size={20} className="text-black" />
          </ActionIcon>
        )}
      </Menu.Target>

      <Menu.Dropdown>
        {user && (
          <>
            <Menu.Item
              icon={<MdPersonOutline size={ICON_SIZE} />}
              onClick={() => push(`/@${username}`)}
            >
              View Profile
            </Menu.Item>
            <Menu.Item icon={<MdOutlineSettings size={ICON_SIZE} />}>
              Settings
            </Menu.Item>
          </>
        )}

        <Menu.Item icon={<MdOutlineLanguage size={ICON_SIZE} />}>
          English
        </Menu.Item>
        <Menu.Item icon={<MdHelpOutline size={ICON_SIZE} />}>
          Feedback and help
        </Menu.Item>
        <Menu.Item icon={<MdOutlineKeyboardAlt size={ICON_SIZE} />}>
          Keyboard Shortcuts
        </Menu.Item>
        <Menu.Item
          icon={<MdOutlineDarkMode size={ICON_SIZE} />}
          rightSection={
            <Switch
              size="md"
              radius="lg"
              color="green"
              className="cursor-pointer"
            />
          }
          closeMenuOnClick={false}
        >
          Dark Mode
        </Menu.Item>

        {user && (
          <>
            {" "}
            <Menu.Divider />
            <Menu.Item icon={<MdOutlineLogout size={ICON_SIZE} />}>
              Logout
            </Menu.Item>{" "}
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default TopBarDropdown;
