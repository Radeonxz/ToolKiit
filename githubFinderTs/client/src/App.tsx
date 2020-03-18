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
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
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

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <>
            <UntypedAlert alert={alert} />
          </>
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
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
