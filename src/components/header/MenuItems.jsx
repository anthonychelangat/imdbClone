import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const MenuItems = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
      icon: { AiFillHome },
    },
    {
      title: "About",
      path: "/about",
      icon: { BsFillInfoCircleFill },
    },
  ];

  return (
    <div className="flex justify-between items-center">
      <MenuItem items={navItems} />
    </div>
  );
};

export default MenuItems;
