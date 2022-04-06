import React from 'react'
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Viren"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      
      <img
        className="post__image"
        src="https://wallpapers.com/wallpapers/switzerland-landscape-painting-sb42zwr6hsytdv2u.html"
        alt=""
      />

      <h4 className="post__text">
        <strong>VIREN....</strong> Keep going viren
      </h4>
    </div>
  );
}

export default Post