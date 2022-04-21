import React, { Component } from "react";
import ProfileForm from "../components/ProfileForm";
import "../App.css";
// import axios from 'axios'

// class App extends Component {


//   render() {
//     return (
//       <div>
//         <ProfileForm />
//       </div>
//     );
//   }
// }

const Profile = () => {

  // fileSelectedHandler = event => {
  //   console.log(event)
  // }

  return (
    <div>
      <ProfileForm />
      <div className="App">
        {/* <input type ="file" onChange={this.fileSelectedHandler}/> */}

      </div>
    </div>
  );
};

export default Profile;
