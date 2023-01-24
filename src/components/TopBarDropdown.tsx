import { Menu, Switch, ActionIcon, Avatar } from "@mantine/core";
import { AiOutlineMore } from "react-icons/ai";

const TopBarDropdown = () => {
  const user = "Delasi";

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
        <Menu.Item>View Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>English</Menu.Item>
        <Menu.Item>Feedback and help</Menu.Item>
        <Menu.Item>Keyboard Shortcuts</Menu.Item>
        <Menu.Item
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
      </Menu.Dropdown>
    </Menu>
  );
};

export default TopBarDropdown;
