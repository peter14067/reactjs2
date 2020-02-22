import ReactDOM from "react-dom"
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Jumbotron, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import Logo1 from './pc1.jpg';
import AlbumJson from './Album.json';



import  './index4.css'; 
class Main extends React.Component {

    state = {
        album: AlbumJson,
      }
    


  render() {


    const { album } = this.state;
      return (
         




        <div>


  <Row>
            
            {
              album.map(product => (
                <Col sm={6} md={4} className="mb-3">
                  <Card>
                    <CardImg width="100%" src={product.img} alt="Card image cap" />
                    
                      <CardTitle>{product.title}</CardTitle>
                      <CardSubtitle>
                        <h4>
                          {
                            product.discount
                            ? <Badge color="danger">特價：{product.price}</Badge>
                            : <Badge color="success">售價：{product.price}</Badge>
                          }
                        </h4>
                      </CardSubtitle>
                      <CardText>{product.desc}</CardText>
                      <Button color="secondary">購買</Button>
                    
                  </Card>
                </Col>
              ))
            }
          </Row>



  <Container>
    <Row>
        <Col xs="12" md="3"><Button color="danger" block>關於我們</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>精油介紹</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>聯絡我們</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>Danger</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>Danger</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>Danger</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>Danger</Button></Col>
        <Col xs="12" md="3"><Button color="danger" block>Danger</Button></Col>
    </Row>
</Container>



<Jumbotron>
        <h1 className="display-3">美客唱片</h1>
        <p className="lead">
            美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
        </p>
        <p className="lead">
             並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
        </p>
        <p className="lead">
            不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
         </p>
        <p className="lead">
            進一步擴大影響力，提昇流行音樂產業的動能
         </p>
        <hr className="my-2" />
        <p className="lead">
            <Button color="primary">購物車</Button>
        </p>
    </Jumbotron>


    
</div>



      )
  }
}



    ReactDOM.render(
     <Main/>,
      document.getElementById('root')
    );
  
