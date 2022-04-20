import React from "react";
import Typed from "react-typed";

const Home = () => {
  const bgStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "92vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url("https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100%&q=60")`,
  };
  return (
    <div style={bgStyle}>
      <Typed
        style={{
          marginBottom: '305px',
          fontSize: "50px",
        }}
        strings={["Welcome to Fetch !"]}
        typeSpeed={40}
      />
    </div>
  );
};

export default Home;
