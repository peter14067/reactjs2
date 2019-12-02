import React from "react"
import  './index4.css'; 
import Logo from './pc1.jpg';
import Logo1 from './pc2.png';
import Logo2 from './pc3.jpg';

class About extends React.Component{
    
    

    
    render(){
                
        return( 
   




            
        <div>
            
            <button className="logo1"><img src="./pc1.jpg"   src={Logo} alt="Logo"  className="logo1"/> </button>
            <p style={{color:"blue",fontSize:"2em"}}>檀香的說明</p>
           <p className="pc1" >
            檀香，香木名。木材極香，可制器物，亦可入藥。寺廟中用以熄滅祀佛。檀香樹是一種半寄生動物，生長極端遲緩，
            通常要數十年才幹成材。是生長最慢的樹種之一，成熟的檀樹可高達十米。 原文網址：https://kknews.cc/culture/lzyy8pb.html
            </p>            
            <img src={Logo1} alt="Logo"  style={{height:"40vh",width:"25%",marginRight:"2vw"}}/> 
            <img src={Logo2} alt="Logo"  style={{height:"40vh",width:"25%"}}/>            
             

        </div>
      
        
      
        
        );
    }
}
export {About}