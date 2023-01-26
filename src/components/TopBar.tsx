import { useState } from "react";
import Link from "next/link";
import { TextInput, Button, Modal } from "@mantine/core";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import {
  TopBarDropdown,
  Notifications,
  UploadButton,
  TopBarIcon,
} from "@components";
import { useAuthUser, useLoginModal } from "@lib/hooks";
import { useRouter } from "next/router";

const TopBar = () => {
  const { user } = useAuthUser();
  const { push } = useRouter();
  const { open, handleOpen, handleClose } = useLoginModal();

  const handleLogin = () => {
    handleOpen();
  };

  return (
    <div className="h-[60px] bg-white w-full fixed top-0 z-[1000] shadow-sm flex justify-around items-center">
      <div className="w-full flex h-full justify-between items-center max-w-[1150px] pl-[20px] pr-[24px]">
        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold">TikTok</h1>
        </Link>

        {/* search input */}
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
              "bg-[#f1f1f2] w-[350px] border-transparent focus:border-[#c5c6c9] placeholder:font-light placeholder:text-[#757575] caret-primary",
          }}
          size="md"
          type="search"
        />

        <div className="flex items-center space-x-5">
          {user ? (
            <Link href="/upload" passHref>
              <UploadButton />
            </Link>
          ) : (
            <UploadButton handleLogin={handleLogin} />
          )}

          {user ? (
            <>
              <TopBarIcon
                icon={AiOutlineMessage}
                onClick={() => push("/messages")}
                label="Messages"
              />

              <Notifications />
            </>
          ) : (
            <Button
              onClick={handleLogin}
              className="bg-primary hover:bg-primaryDark min-w-[100px] min-height-[36px]"
            >
              Log in
            </Button>
          )}

          <TopBarDropdown />
        </div>

        <Modal
          opened={open}
          onClose={() => handleClose()}
          title="Introduce yourself!"
          centered
          overlayOpacity={0.4}
          closeOnClickOutside={false}
          zIndex={2000}
        >
          <div>hello there</div>
        </Modal>
      </div>
    </div>
  );
};

export default TopBar;
