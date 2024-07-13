import React from "react";
import Header from "../components/Header";
import BoardNameList from "../components/BoardNameList";
import Footer from "../components/Footer";
import PostDetailMain from "../components/PostDetailMain";

function PostDetailPage() {
  return (
    <div>
      <Header />
      <BoardNameList />
      <PostDetailMain />
      <Footer />
    </div>
  );
}

export default PostDetailPage;
