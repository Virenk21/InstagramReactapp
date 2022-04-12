import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "innocentviren",
      caption: "wow it works",
    },
    { username: "innocentviren",
      caption: "wow it works" 
    },
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
      <img src="https://wallpapercave.com/wp/wp4565526.jpg" />
      <h4>beautiful day</h4>
      <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" />
      <h4>lightning</h4>
      <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg" />
      <h4>clouds</h4>
      <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" />
      <h4>water_tree</h4>
      <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" />
      <h4>boat</h4>
      <img src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__340.jpg" />
      <h4>bay</h4>
    </div>
  );
}

export default App;
