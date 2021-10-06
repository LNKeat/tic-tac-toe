import React, { useEffect, useState } from 'react';

export default function ClientComponent({socket}) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    socket.on("connected", data => {
      console.log(data);
      return () => socket.disconnect();
    }, []);
  })


    // function handleMove(){
    //   console.log('socket: ', socket)
    //   socket.emit('move', 'X')
    // }


    return (
      <div>
        <button>Make a move</button>
        <p>
          It's <time dateTime={response}>{response}</time>
        </p>
      </div>
    );
  }