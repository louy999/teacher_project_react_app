import Navbar from "./component/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/home";
import Chat from "./component/chat";
import Profile from "./component/profile";
import Schedule from "./component/schedule";
import Test from "./component/test";
import Search from "./component/search";
import Notification from "./component/notification";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/test" element={<Test />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </>
  );
}

export default App;
