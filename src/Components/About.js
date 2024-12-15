// import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent component did mount");
  }
  render() {
    // console.log("Parent Render");

    return (
      <div>
        {/* <h1> About</h1> */}
        <h2>This is the page for about us</h2>
       
        <UserClass name={"Nilesh Yadav (Class)"} location={"Bhadohi Class"} />
      </div>
    );
  }
}

export default About;
