import React from "react";
import NavBar from "./components/NavBar";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <>
      <div className="App" style={{ maxWidth: 680, margin: "0 auto" }}>
        <NavBar />
        <UserContainer />
      </div>
    </>
  );
};

export default App;
