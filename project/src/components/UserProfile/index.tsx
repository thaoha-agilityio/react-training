import { memo } from "react";

// Components
import { SettingIcon } from "../Icons";
import Button from "../Button";

interface UserProfileProps {
  name: string;
  avatar: string;
  role: string;
}

const UserProfile = ({ name, avatar, role }: UserProfileProps) => (
  <div className="pb-9">
    <div className="pt-10 flex justify-between align-center">
      <div className="flex gap-3">
        <img src={avatar} className="w-11 h-11 rounded-full" />
        <div className="text-left">
          <p className="text-sm">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
      <Button variant="unstyled">
        <SettingIcon width={20} height={20} className="fill-neutral-400" />
      </Button>
    </div>
  </div>
);

export default memo(UserProfile);
