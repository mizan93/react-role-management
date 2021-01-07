import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import checkLogin from "../../services/auth/LoginSrvice";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMsg: "",
  };
  componentDidMount() {
    const userItem = JSON.parse(localStorage.getItem("userItem")) || undefined;
    console.log("typeof", typeof userItem);
    if (typeof userItem != "undefined") {
      if (userItem.username && userItem.username.length > 0) {
        this.props.history.push("/users");
      }
    }
  }
  changeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  submitLogin = (e) => {
    e.preventDefault();
    if (checkLogin(this.state)) {
      localStorage.setItem("userItem", JSON.stringify(this.state));
      this.props.history.push("/users");
    } else {
      this.setState({ errorMsg: "Error! Invalid cridential." });
    }
    //   console.log(this.state)
  };
  render() {
    return (
      <div className="d-flex justify-content-center login-area">
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>Login to account</Card.Title>

            {this.state.errorMsg.length > 0 && (
              <Alert variant="danger">{this.state.errorMsg} </Alert>
            )}

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.changeUsername}
                  value={this.state.username}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                onClick={this.submitLogin}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(Login);
