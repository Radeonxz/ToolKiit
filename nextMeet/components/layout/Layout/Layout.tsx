import { LayoutProps } from "./Layout.model";

import MainNavigation from "../MainNavigation";
import classes from "./Layout.module.css";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
