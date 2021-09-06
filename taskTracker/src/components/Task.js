import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({ task: { id, text, day, reminder }, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(id)}
    >
      <h3>
        {text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(id)}
        />
      </h3>
      <p>{day}</p>
    </div>
  );
};

Task.protoTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func
};

export default Task;
