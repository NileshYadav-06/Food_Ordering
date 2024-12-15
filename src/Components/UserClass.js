import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log("Child Constructor");
  }
   async componentDidMount() {
    // console.log("Child Component did mount");
    // API call

    const data = await fetch("https://api.github.com/users/nileshyadav-06");
    const json = await data.json(); //here we use await because this will return promise also.

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  render() {
    const { name, location , avatar_url } = this.state.userInfo;

    // console.log("Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} alt="userImg" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: nilesh123@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
