import React from 'react';
import ReactDOM from 'react-dom';
let time = 7;//倒數7秒





  function MyCounter(){
    
    if(time>0){
      time-=1; 
      //倒數完成
    }else{
     
     time=60
    }
    
   
    return time;
  }


  function tick() {
    const element = (
      <div>
        <h1>距離下次開獎為< MyCounter/>秒</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);





ReactDOM.render(
  <tick />,
  document.getElementById('root')
);
/*

    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
setInterval(tick, 1000);
\

*/