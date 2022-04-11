import React, { useState } from 'react';
import "./App.css";
import styled from "styled-components";
import Post from "./Post";
import Header from "./Header";


function App() {
  const [posts, setPosts] = useState([
    {
      username: "innocentviren", caption:"wow it works"
    },
    {}
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <Post
        username="virenkidding"
        caption="Wow it works"
        imageUrl="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL116_SR116,116_.jpg"
      />
      <Post
        username="virenkidding"
        caption="Wow it works"
        imageUrl="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL116_SR116,116_.jpg"
      />
      <Post
        username="virenkidding"
        caption="Wow it works"
        imageUrl="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL116_SR116,116_.jpg"
      />
      <Post
        username="virenkidding"
        caption="Wow it works"
        imageUrl="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL116_SR116,116_.jpg"
      />
      <Post
        username="virenkidding"
        caption="Wow it works"
        imageUrl="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL116_SR116,116_.jpg"
      />
      <Post
        username="virenkidding"
        caption="Wow it works"
        imageUrl="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL116_SR116,116_.jpg"
      />
      <img src="https://wallpapercave.com/wp/wp4565526.jpg" />
      <h4>beautiful day</h4>
    </div>
  );
}


export default App;
