import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
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
        <h1>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </h1>
        <User />
      </div>
    );
  }
}
export default About;
