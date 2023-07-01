import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ChatPage from "./Pages/ChatPage/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/chats" element={<ChatPage />}></Route>
    </Routes>
  );
}

export default App;
