import MainNavigation from "../MainNavigation";
import "./styles.css";

function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
}

export default Layout;
