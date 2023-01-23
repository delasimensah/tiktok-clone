import Link from "next/link";
import { TextInput, Button, Menu, Switch } from "@mantine/core";
import { AiOutlineMore, AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const TopBar = () => {
  const user = null;

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <div className="h-[60px] bg-white w-full fixed top-0 z-[1000] shadow-sm flex justify-around items-center">
      <div className="w-full flex h-full justify-between items-center max-w-[1150px] pl-[20px] pr-[24px]">
        <Link href="/">
          <h1 className="text-3xl font-bold">TikTok</h1>
        </Link>

        <TextInput
          placeholder="Search accounts and videos"
          className=""
          rightSection={
            <div className="w-full border-l border-l-[#d7d7d9] rounded-tr-[32px] rounded-br-[32px] flex items-center justify-center">
              <FiSearch size={15} className="text-[#a2a2a6]" />
            </div>
          }
          radius="xl"
          classNames={{
            input:
              "bg-[#f1f1f2] w-[350px] border-transparent focus:border-[#c5c6c9] placeholder:font-light placeholder:text-[#757575] caret-[#fe2c55]",
          }}
          size="md"
          type="search"
        />

        <div className="flex items-center space-x-3">
          {user ? (
            <Link href="/upload" passHref>
              <Button
                leftIcon={<AiOutlinePlus />}
                variant="outline"
                color="dark"
                className="min-height-[36px]"
              >
                Upload
              </Button>
            </Link>
          ) : (
            <Button
              leftIcon={<AiOutlinePlus />}
              onClick={handleLogin}
              variant="outline"
              color="dark"
              className="min-height-[36px]"
            >
              Upload
            </Button>
          )}

          <Button
            onClick={handleLogin}
            className="bg-[#fe2c55] hover:bg-[#ef2a51] min-w-[100px] min-height-[36px]"
          >
            Log in
          </Button>

          <Menu
            trigger="hover"
            width={250}
            openDelay={100}
            closeDelay={400}
            withArrow={true}
            // position="bottom-end"
            arrowPosition="side"
            // arrowOffset={100}
            radius="md"
            classNames={{
              dropdown: "px-0",
              item: "rounded-none font-medium text-md",
            }}
          >
            <Menu.Target>
              <AiOutlineMore size={20} className="text-black" />
            </Menu.Target>

            <Menu.Dropdown>
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
        </div>
      </div>
    </div>
  );
};

export default TopBar;
