import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// import custom hooks
import { useAsyncEffect } from "./utils/hooks";

// import components
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert/Alert";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useAsyncEffect(async () => {
    setLoading(true);
    const res = await axios.get("https://api.github.com/users");
    setLoading(false);
    setUsers(res.data);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <Users loading={loading} users={users} />
                </>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
