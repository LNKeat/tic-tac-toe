import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

export default function ClientComponent() {
  const [response, setResponse] = useState("");
  let socket;
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  //   return () => socket.disconnect();
  // }, []);
  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    socket.on("connected", data => {
      console.log(data);
    });
    return () => socket.disconnect();
  }, []);

  function handleMove(){
    console.log('socket: ', socket)
    socket.emit('move', 'X')
  }


  return (
    <div>
      <button onClick={handleMove}>Make a move</button>
      <p>
        CHILD: It's <time dateTime={response}>{response}</time>
      </p>
    </div>
  );
}