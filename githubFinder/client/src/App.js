import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {
    // env variables
    // const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    // const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    this.setState({ loading: true });
    // const res = await axios.get(`https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`);
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      users: res.data,
      loading: false
    });
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  // Clear Users
  clearUsers = () => this.setState({ users: [], loading: false });
  
  // Set Alert
  setAlert = (msg, alertType) => {
    this.setState({ alert: { msg, alertType } });
    setTimeout(() => this.setState({ alert: null }), 2500)
  }

  render() {
    const { alert, users, loading } = this.state;

    return (
      <Route>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Search
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Users loading={loading} users={users} />
          </div>
        </div>
      </Route>
    );
  }
}

export default App;