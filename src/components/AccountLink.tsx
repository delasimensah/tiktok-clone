import { useState } from "react";
import {
  NavLink,
  Avatar,
  HoverCard,
  Text,
  Group,
  Anchor,
  Stack,
} from "@mantine/core";
import { useRouter } from "next/router";

const AccountLink = () => {
  const [opened, setOpened] = useState(false);
  const { push } = useRouter();
  const username = "delanomad";
  const name = "delanomad2";

  return (
    <>
      <HoverCard
        width={320}
        shadow="md"
        withArrow
        openDelay={400}
        closeDelay={200}
        position="bottom"
      >
        <HoverCard.Target>
          <NavLink
            icon={
              <Avatar color="cyan" radius="xl" size="md">
                {username[0].toUpperCase()}
              </Avatar>
            }
            label={username}
            description={name}
            classNames={{
              root: "py-1 px-0",
              label: `font-semibold text-base`,
              description: `text-xs font-light`,
            }}
            onClick={() => push(`/@${username}`)}
          />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar color="cyan" radius="xl" size="md">
              {username[0].toUpperCase()}
            </Avatar>

            <Stack spacing={5}>
              <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                {username}
              </Text>
              <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }}>
                {name}
              </Text>
            </Stack>
          </Group>

          <Group mt="md" spacing="xl">
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
            <Text size="sm">
              <b>1,100</b> Likes
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>

      {/* <Menu
      trigger="hover"
      width={250}
      openDelay={1000}
      closeDelay={500}
      radius="md"
      classNames={{
        dropdown: "px-0",
        item: "rounded-none font-medium text-md",
      }}
    >
      <Menu.Target>
        <NavLink
          icon={
            <Avatar color="cyan" radius="xl" size="md">
              {username[0].toUpperCase()}
            </Avatar>
          }
          label={username}
          description={name}
          classNames={{
            root: "py-1 px-0",
            label: `font-semibold text-base`,
            description: `text-xs font-light`,
          }}
          onClick={() => push(`/@${username}`)}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <div className="bg-white w-60 h-60"></div>
      </Menu.Dropdown>
    </Menu> */}
    </>
  );
};

export default AccountLink;
