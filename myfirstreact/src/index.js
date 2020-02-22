import ReactDOM from "react-dom"
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Row, Col } from 'reactstrap';



import  './index4.css'; 
class Main extends React.Component {
  render() {
      return (
         




        <div>


 



  <Container>
    <Row>
        <Col xs="12" md="3"><Button color="danger" block>關於我們</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>精油介紹</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>聯絡我們</Button></Col>
       
    </Row>
</Container>
</div>



      )
  }
}



    ReactDOM.render(
     <Main/>,
      document.getElementById('root')
    );
  
