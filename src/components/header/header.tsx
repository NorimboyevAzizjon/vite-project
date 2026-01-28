import { SearchInput } from "../search-input";
import { HeaderLinks } from "./header-links";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-3">
      <Link to="/">
        <img src="/logo.jpg" alt="Uzum Market" className="w-[120px] h-[40px] object-contain" />
      </Link>
      <SearchInput />
      <HeaderLinks />
    </header>
  );
};
