import ReactDOM from "react-dom"
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';



import  './index4.css'; 
class Main extends React.Component {
  render() {
      return (
         




        <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      1 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
  </div>


  <Button color="danger">danger</Button>
</div>



      )
  }
}



    ReactDOM.render(
     <Main/>,
      document.getElementById('root')
    );
  
