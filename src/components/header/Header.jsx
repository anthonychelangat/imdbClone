import React from "react";
import MenuItems from "./MenuItems";
import DarkModeSwitch from "../DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div>
        <MenuItems />
      </div>

      <div className="flex items-center gap-4">
        <DarkModeSwitch />

        <a href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            Imdb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
