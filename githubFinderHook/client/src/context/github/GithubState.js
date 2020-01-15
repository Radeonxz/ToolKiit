import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  FETCH_DEFAULT_USERS,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get all default users
  // env variables
  // const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  // const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  // const res = await axios.get(`https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`);
  const fetchDefaultUser = async () => {
    setLoading();
    const res = await axios.get("https://api.github.com/users");
    dispatch({
      type: FETCH_DEFAULT_USERS,
      payload: res.data
    });
  };

  // Search users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Get user
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get repos

  // Clear users
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        // funcs
        fetchDefaultUser,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
