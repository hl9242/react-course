import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constsructor");
  }
  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Page</h1>
        <User />
      </div>
    );
  }
}
export default About;
