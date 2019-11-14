import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert/Alert";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  async componentDidMount() {
    // env variables
    // const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    // const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    this.setState({ loading: true });
    // const res = await axios.get(`https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`);
    const res = await axios.get("https://api.github.com/users");
    this.setState({
      users: res.data,
      loading: false
    });
  }

  // Search github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  // Get a single github user
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({
      user: res.data,
      loading: false
    });
  };

  // Clear Users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, alertType) => {
    this.setState({ alert: { msg, alertType } });
    setTimeout(() => this.setState({ alert: null }), 2500);
  };

  render() {
    const { alert, users, user, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
