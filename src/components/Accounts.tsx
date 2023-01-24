import { FC, useState } from "react";
import { AccountLink } from "@components";
import { Button } from "@mantine/core";

type AccountsProps = {
  title: string;
  accounts: number[];
};

const Accounts: FC<AccountsProps> = ({ title, accounts }) => {
  const [showMore, setShowMore] = useState(false);

  const visibleAccounts = showMore ? [...accounts] : accounts.slice(0, 6);

  return (
    <div className="pt-[16px] space-y-3">
      <p className="text-sm">{title}</p>

      <div>
        {visibleAccounts.map((item, idx) => {
          return <AccountLink key={idx} />;
        })}
      </div>

      {accounts.length > 5 && (
        <Button
          variant="subtle"
          onClick={() => setShowMore((prev) => !prev)}
          className="p-0 font-light text-primary hover:bg-transparent"
        >
          See {showMore ? "less" : "all"}
        </Button>
      )}
    </div>
  );
};

export default Accounts;
