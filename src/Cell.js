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
const styles = {
  border: '3px solid blue',
  height: '80px',
  width: '80px'
}

function Cell({ status, id, handleClick }){
  return (
    <div id={id} onClick={handleClick} style={{ flexBasis:"31%", height: "16vw", backgroundColor: "#00aa00", borderStyle: "solid", verticalAlign: "middle", lineHeight: "16vw"  }}>
      {translateStatus(status)}
    </div>
  );
}

export default Cell