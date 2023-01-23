import { NavLink, Button, Avatar } from "@mantine/core";

const AccountCard = () => {
  return (
    <NavLink
      icon={
        <Avatar color="cyan" radius="xl" size="md">
          MK
        </Avatar>
      }
      label="delanomad"
      description="delanomad2"
      classNames={{
        root: "py-1 px-0",
        label: `font-semibold text-base`,
        description: `text-xs font-light`,
      }}
    />
  );
};

export default AccountCard;
