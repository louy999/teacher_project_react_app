import Navbar from "./component/comp-navbar/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/comp-home/home";
import Chat from "./component/comp-chat/chat";
import Profile from "./component/comp-profile/profile";
import Schedule from "./component/comp-schedule/schedule";
import Test from "./component/comp-test/test";
import Search from "./component/comp-search/search";
import Notification from "./component/comp-notification/notification";
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
