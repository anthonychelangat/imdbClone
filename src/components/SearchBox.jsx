"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = e => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-5 pt-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search here..."
        className="w-full h-14 pl-3 mr-4 rounded-md placeholder:gray-500 outline-none 
        background-transparent flex-1"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
