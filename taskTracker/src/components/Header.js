import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title, showAddTask, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />
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
