import React from "react"
import  './index4.css'; 
import Logo1 from './pc1.jpg';
import Logo2 from './pc2.png';
import Logo3 from './pc3.jpg';

class Product extends React.Component{
    
    

    
    render(){
                
        return( 
   
        <div>
            <div style={{marginTop:"15vh"}}>
           <img class="logo1" src={Logo1} alt="Logo" /> 
           <p style={{color:"blue",fontSize:"2em"}}>檀香的說明</p>
           <p className="pc1" >
           
           <br></br>
            檀香，香木名。木材極香，可制器物，亦可入藥。寺廟中用以熄滅祀佛。檀香樹是一種半寄生動物，生長極端遲緩，
            通常要數十年才幹成材。是生長最慢的樹種之一，成熟的檀樹可高達十米。 原文網址：https://kknews.cc/culture/lzyy8pb.html
            </p>            
            </div>
            <div>
           <img class="logo2" src={Logo2} alt="Logo"/> 
           <p style={{color:"blue",fontSize:"2em"}}>無花果的介紹 </p>
           <p className="pc2" >
          
          
            無花果（學名：Ficus carica）是桑科榕屬的一種落葉小喬木，主要生長於熱帶和溫帶。果實呈球根狀，無花果尾部有一個小孔，花則生長於果內，在近小孔處長有雄花，遠離小孔的頂部長有雌花，另外生有不育花（癭花），花粉由榕果小蜂傳播
           <br></br>
            </p>
            </div>
            <div>
           <img class="logo3" src={Logo3} alt="Logo"/> 
           <p style={{color:"blue",fontSize:"2em"}}>招財進寶--葉背金色的金新木薑子</p>
           <p className="pc3" >
          
          
           佛光樹的本名為「金新木薑子」，最早提出該樹紀錄的是日本學者早田文藏。人們只知道它屬於「樟科」的常綠喬木，生長良好的成樹可達12~15公尺。又稱為「七寶樹」、「密宗七寶樹」、gold colored neolitsea (有金色絨毛葉子的意思）。

            會有佛光樹這樣的別名，當然有它的傳說及故事，更造就佛光樹不菲身價。
            
           <br></br>
            </p>
            </div>
         
        

        </div>
      
        
      
        
        );
    }
}
export {Product}