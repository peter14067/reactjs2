import ReactDOM from "react-dom"
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Jumbotron, Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import AlbumJson from './Album.json';



import  './index4.css'; 
class Main extends React.Component {

    state = {
        album: AlbumJson,
      }
    

      toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
      }
    


  render() {


    const { album } = this.state;
      return (
         




        <div>


<Container>
    <Row>
        <Col xs="4" md="20"><Button color="danger" block>關於我們</Button></Col>
        <Col xs="4" md="20"><Button color="danger" block>精油介紹</Button></Col>
        <Col xs="4" md="20"><Button color="danger" block>聯絡我們</Button></Col>
     
    </Row>




<Row>
            <Col md={12}>
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
                  <Button color="primary" onClick={this.toggle}>購物車</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>


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


          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
            <ModalBody>
              這裡要購買物品
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>結帳</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>取消</Button>
            </ModalFooter>
          </Modal>
  




          </Container>
    
</div>



      )
  }
}



    ReactDOM.render(
     <Main/>,
      document.getElementById('root')
    );
  
