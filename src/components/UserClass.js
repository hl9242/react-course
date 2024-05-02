import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        userName: "",
        bio: "",
        company: "",
        avatar_url: "",
      },
    };
    console.log(" Child Constructor");
  }
  async componentDidMount() {
    console.log("Child ComponentDidMount");
    const apidata = await fetch("https://api.github.com/users/hl9242");
    const data = await apidata.json();
    console.log(data);
    this.setState({
      userInfo: data,
    });
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate if UserClass.js");
    // this.timer = setInterval(() => {
    //   console.log("Hello from ComponentDidUpdate");
    // }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("In ComponentWillUnmount clearing timer ", this.timer);
  }
  render() {
    console.log("Child Render");
    const { name, location, userName, bio, company, avatar_url } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <img src={avatar_url} />
        <h3>Location: {location}</h3>
        <h4>Twitter UserName: {userName}</h4>
        <h4>bio: {bio}</h4>
        <h4>company: {company}</h4>
      </div>
    );
  }
}
export default UserClass;
