import React, { Component } from "react";
import ProfileForm from "../components/ProfileForm";
import '../App.css'
// import axios from 'axios'


class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event =>{
    this.setState({
      selectedFile: event.target.files[0]

    })
  }

fileUploadHandler = () => {
  const fd = new FormData();
  fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
  // axios.post('')
  // .then(res => {
  //   console.log(res)
  // })


}



  render(){
    return (
      <div>
        <ProfileForm />
        <div className="App">
          <input type ="file" onChange={this.fileSelectedHandler}/>
          <button onClick={this.fileUploadHandler}>Upload</button>
  
        </div>
      </div>
    );
  }
}




// const Profile = () => {

//   // fileSelectedHandler = event => {
//   //   console.log(event)
//   // }


//   return (
//     <div>
//       <ProfileForm />
//       <div className="App">
//         <input type ="file" onChange={this.fileSelectedHandler}/>

//       </div>
//     </div>
//   );
// };

export default App;
