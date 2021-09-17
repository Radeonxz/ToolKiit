import PropTypes from "prop-types";
import { useLocation } from "react-router";

import Button from "./Button";

const Header = ({ title, showAddTask, onAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.protoTypes = {
  title: PropTypes.string,
  showAddTask: PropTypes.bool,
  onAdd: PropTypes.func
};

export default Header;
