import { ReactNode } from "react";
import { Header } from "../components/header/header";
import { NavCategories } from "../components/nav-categories/nav-categories";
import Footer from "../components/footer/footer";

interface IProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <div className="container min-h-screen flex flex-col">
      <Header />
      <NavCategories />
      <div className="mt-3 flex-1">{children}</div>
      <Footer />
    </div>
  );
};
