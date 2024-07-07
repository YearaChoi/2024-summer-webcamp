import React from "react";
import Header from "../components/Header";
import BoardNameList from "../components/BoardNameList";
import Footer from "../components/Footer";
import BoardMain from "../components/BoardMain";

function BoardPage() {
  return (
    <div>
      <Header />
      <BoardNameList />
      <BoardMain />
      <Footer />
    </div>
  );
}

export default BoardPage;
