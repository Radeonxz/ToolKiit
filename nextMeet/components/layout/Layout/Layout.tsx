import { LayoutProps } from "./Layout.model";

import MainNavigation from "../MainNavigation";
import "./styles.css";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <MainNavigation />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
