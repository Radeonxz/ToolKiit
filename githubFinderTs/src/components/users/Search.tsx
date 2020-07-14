import React, { useState } from "react";
import PropTypes from "prop-types";

interface Props {
  searchUsers: (text: string) => void;
  clearUsers: () => void;
  setAlert: (msg: string, alertType: string) => void;
  showClear: boolean;
}

const Search = ({ searchUsers, clearUsers, setAlert, showClear }: Props) => {
  const [text, setText] = useState("");

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (text.length === 0) {
      const msg = "Please enter something to search...";
      const alertType = "light";
      setAlert(msg, alertType);
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark
            btn-block"
        />
      </form>
      {showClear && (
        <button
          className="btn
          btn-light
          btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
