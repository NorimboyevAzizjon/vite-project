import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState, FormEvent } from "react";
import { toast } from "react-toastify";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      toast.info(`"${inputValue}" bo'yicha qidiruv...`);
      // TODO: Implement search page
      // navigate(`/search?q=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="border border-gray-300 flex max-w-[507px] w-full rounded-md overflow-hidden">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Mahsulotlarni va turkumlarni izlash"
        className="px-4 py-2 flex-grow outline-none"
      />
      <button 
        type="submit"
        className="px-5 py-2 bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
    </form>
  );
};
