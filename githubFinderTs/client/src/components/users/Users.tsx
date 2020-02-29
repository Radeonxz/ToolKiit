import React from "react";
// import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner/Spinner";

interface IUser {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface IProps {
  users: IUser[];
  loading: boolean;
}

const Users = ({ users, loading }: IProps) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

// UserItem.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired
// };

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
