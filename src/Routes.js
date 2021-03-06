import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Todo from "./Containers/Todo/Todo";
import Login from "./Containers/Login/Login";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }
  async isAuthenticated() {
    let cookie = (await document.cookie) && document.cookie.split("; ");

    if (cookie && cookie.length > 0) {
      cookie.forEach(data => {
        let dataSplit = data.split("=");
        dataSplit &&
          dataSplit.length > 0 &&
          dataSplit.forEach(item => {
            if (item === "user") {
              this.setState({ isAuthenticated: true });
            }
          });
      });
    }
  }

  componentDidMount() {
    this.isAuthenticated();
  }

  render() {
    return this.state.isAuthenticated ? (
      <Router history={this.props.history}>
        <Switch>
          <Route path="/todos" exact component={() => <Todo />} />
          <Route path="/" exact component={() => <Todo />} />
        </Switch>
      </Router>
    ) : (
      <Router history={this.props.history}>
        <Switch>
          <Route path="/*" exact component={() => <Login />} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
