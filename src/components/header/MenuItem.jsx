import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const MenuItem = ({ items }) => {
  // <item.icon className="text-2xl sm:hidden"/>
  return (
    <div className="flex gap-4 p-3">
      {items.map(item => (
        <a href={item.path} key={item.title} className="hover:text-amber-500">
          <p className="uppercase sm:inline text-sm">{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default MenuItem;
