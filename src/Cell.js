import React from 'react'


function translateStatus(status){
  if(status === 0){
    return ''
  }else if(status === 1){
    return 'X'
  }else if(status === 2){
    return 'O'
  }
} 

function Cell({ status, id, handleClick }){
  return (
    <div id={id} onClick={handleClick}>
      {translateStatus(status)}
    </div>
  );
}

export default Cell