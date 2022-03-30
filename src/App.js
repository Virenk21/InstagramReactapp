import "./App.css";
import styled from "styled-components";
import Post from "./Post";
import Header from "./Header";


function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <Header />
    </div>
  );
}


export default App;
