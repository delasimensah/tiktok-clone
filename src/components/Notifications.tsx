import { useState } from "react";
import { Popover } from "@mantine/core";
import { AiOutlineInbox } from "react-icons/ai";
import { TopBarIcon } from "@components";

const ICON_SIZE = 30;

const Notifications = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      width={300}
      trapFocus
      position="bottom"
      shadow="md"
      opened={opened}
      onChange={setOpened}
    >
      <Popover.Target>
        <TopBarIcon
          onClick={() => setOpened((o) => !o)}
          label="Inbox"
          icon={AiOutlineInbox}
          disabled={opened}
        />
      </Popover.Target>

      <Popover.Dropdown>
        <div>
          <p>Notifications</p>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Notifications;
