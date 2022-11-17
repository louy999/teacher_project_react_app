import React, { useEffect } from "react";

const channelId = "UC16lFSdqcTubA6MR_Xye-nA";
const api = "AIzaSyA94e5uK9eQ05JUpFITL4Eh9KvlI4Gx7DQ";
const restApi = `https://www.googleapis.com/youtube/v3/videos?key=${api}&channelId=${channelId}`;
const Home = () => {
  useEffect(() => {
    fetch(restApi)
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <>
      <h1>home</h1>
    </>
  );
};

export default Home;
