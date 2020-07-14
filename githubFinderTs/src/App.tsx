import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// import custom hooks
import { useAsyncEffect } from "./utils/hooks";

// import components
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setAlertState] = useState<null | object>(null);

  useAsyncEffect(async () => {
    setLoading(true);
    const res = await axios.get("https://api.github.com/users");
    setLoading(false);
    setUsers(res.data);
  }, []);

  // Search github users
  const searchUsers = async (text: string) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setLoading(false);
    setUsers(res.data.items);
  };

  // Get a single github user
  const getUser = async (username: string) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}`);
    setLoading(false);
    setUser(res.data);
  };

  // Get user's repos
  const getUserRepos = async (username: string) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setLoading(false);
    setRepos(res.data);
  };

  // Clear Users from state
  const clearUsers = () => {
    setLoading(false);
    setUsers([]);
  };

  // Set Alert
  const setAlert = (msg: string, alertType: string) => {
    setAlertState({ msg, alertType });
    setTimeout(() => setAlertState(null), 2500);
  };

  const UntypedAlert = Alert as any;
  const UntypedUser = User as any;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <UntypedAlert alert={alert} />
          <Switch>
            <Route exact path="/">
              <Search
                searchUsers={searchUsers}
                clearUsers={clearUsers}
                setAlert={setAlert}
                showClear={users.length > 0 ? true : false}
              />
              <Users loading={loading} users={users} />
            </Route>
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <UntypedUser
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
