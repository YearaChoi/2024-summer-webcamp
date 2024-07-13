import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import ScrollToTop from "./components/ScrollToTop";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/board/:boardTitle" element={<BoardPage />} />
        <Route
          path="/board/:boardTitle/post/:postId"
          element={<PostDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
