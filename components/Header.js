import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";
import { signOut, useSession } from "next-auth/client";
function Header() {
  const [session] = useSession();
  return (
    <div className="flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          height={40}
          width={40}
          layout="fixed"
        />
        <div className="flex items-center ml-2 bg-gray-100 p-2 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex items-center bg-transparent outline-none ml-2 placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <div className="flex items-center space-x-6 md:space-x-2">
          <HeaderOption active Icon={HomeIcon} />
          <HeaderOption Icon={FlagIcon} />
          <HeaderOption Icon={PlayIcon} />
          <HeaderOption Icon={ShoppingCartIcon} />
          <HeaderOption Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="font-semibold pr-3 whitespace-nowrap">
          {session.user.name}{" "}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
