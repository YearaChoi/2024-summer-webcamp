import React from "react";
import Header from "../components/Header";
import BoardNameList from "../components/BoardNameList";
import Footer from "../components/Footer";
import Main from "../components/Main";

function MainPage() {
  return (
    <div>
      <Header />
      <BoardNameList />
      <Main />
      <Footer />
    </div>
  );
}

export default MainPage;
