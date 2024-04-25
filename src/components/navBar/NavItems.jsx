import React from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const navItems = [
    {
      title: "Trending",
      param: "fetchTrending",
    },
    {
      title: "Top Rated",
      param: "fetchTopRated",
    },
  ];

  return (
    <div className="flex justify-center gap-8">
      <NavItem items={navItems} />
    </div>
  );
};

export default NavItems;
