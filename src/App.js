import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/board/:boardTitle" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
