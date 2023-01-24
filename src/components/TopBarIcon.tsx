import { FC, createElement, forwardRef } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconType } from "react-icons";

type TopBarIconProps = {
  onClick: () => void;
  icon: IconType;
  label: string;
  disabled?: boolean;
};

const TopBarIcon = forwardRef<HTMLButtonElement, TopBarIconProps>(
  function TopBarIcon({ onClick, icon, label, disabled }, ref) {
    const iconElement = createElement(icon, { size: 30 });

    return (
      <Tooltip label={label} color="gray" zIndex={1000} disabled={disabled}>
        <ActionIcon
          variant="transparent"
          color="dark"
          onClick={onClick}
          ref={ref}
        >
          {iconElement}
        </ActionIcon>
      </Tooltip>
    );
  }
);

export default TopBarIcon;
