import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "cristina.somlea",
      userImg: "https://cdn-icons-png.flaticon.com/256/5362/5362034.png",
      img: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "cristina.somlea",
      userImg: "https://cdn-icons-png.flaticon.com/256/5362/5362034.png",
      img: "https://plus.unsplash.com/premium_photo-1690489323667-ea52e341b184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice picture",
    },
    {
      id: "3",
      username: "cristina.somlea",
      userImg: "https://cdn-icons-png.flaticon.com/256/5362/5362034.png",
      img: "https://images.unsplash.com/photo-1690527425856-43307d16d5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice picture",
    },
    {
      id: "4",
      username: "cristina.somlea",
      userImg: "https://cdn-icons-png.flaticon.com/256/5362/5362034.png",
      img: "https://plus.unsplash.com/premium_photo-1690164161383-f5ff30a790bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice picture",
    },
    {
      id: "5",
      username: "cristina.somlea",
      userImg: "https://cdn-icons-png.flaticon.com/256/5362/5362034.png",
      img: "https://plus.unsplash.com/premium_photo-1689596509479-daa6ba973629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice picture",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))}
    </div>
  );
}
