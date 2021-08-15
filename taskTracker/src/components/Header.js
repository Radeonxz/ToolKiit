const Header = ({ title }) => {
  return (
    <header>
      {/* <h1>{name}</h1> */}
      {/* <h1>{age}</h1> */}
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

export default Header;
