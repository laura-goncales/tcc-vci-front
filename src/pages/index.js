import React,{useEffect} from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import backgroundParticle from '../components/Background-particle'
import Header from '../components/Header';
import {Carousel,Row, Col, Container, Card, CardGroup, ListGroup, Jumbotron} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Sidebar from '../components/Sidebar/user';
import slider_01 from "../assets/images/slider_01.png";
import slider_02 from "../assets/images/slider_02.PNG";
import slider_03 from "../assets/images/slider_03.PNG";
import home_mid from "../assets/images/home_mid.png";
import {faClock,faUser,faCheckCircle,faCaretSquareUp} from '@fortawesome/free-regular-svg-icons'
import {animateScroll as scroll} from 'react-scroll'
import {Helmet} from "react-helmet"
function App() {

  return (
  <React.Fragment>
    <Helmet title="Home" />
    <Sidebar pageSelected="reports"/>
      <Header headerTitle="Home"/>
      <div className="content">
        <Container fluid="xl" style={{width:"85vw", marginTop:"2.5vw", marginBottom:"3.5vw"}}>
        <backgroundParticle></backgroundParticle>
        <Carousel style={{height:"20vw"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider_01}
              alt="P. slide"
            />
            <Carousel.Caption className='Caption'>
              <h1 style={{fontWeight:"bold", fontSize:"3vw"}}>Sorteio de questões</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider_02}
              alt="S. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1 style={{fontWeight:"bold", fontSize:"3vw"}}>Forca</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider_03}
              alt="T. slide"
            />

            <Carousel.Caption className='Caption'>
              <h1 style={{fontWeight:"bold", fontSize:"3vw"}}>Comparação de resultados</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      <div className="mid">
        <Row>
            <Col style={{float:"left", paddingTop:"3.5vw"}}>
            <img src={home_mid} style={{height:"35vw"}}/>
            </Col>
            <Col style={{paddingTop:"5vw", paddingRight:"13vw", fontSize:"1.2vw"}}>
            <h3>O projeto</h3>
            <p>O EAD-LAB é uma plataforma de jogos didáticos que têm como objetivo fazer com que o aprendizado seja uma atividade atrativa e prazerosa. Fornecendo uma experiência que é, ao mesmo tempo, confortável e instrutiva, nossos jogos são concebidos no intuito de facilitar a assimilação de conteúdos com uma dinâmica elaborada para expandir e reforçar o desenvolvimento profissional dos usuários.</p>
            
            <ul style={{listStyle:"none", marginLeft:"-7.8vw"}}>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Testa as capacidades de se trabalhar em equipe;</li>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Educação e entretenimento combinados;</li>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Procedimento rápido e intuitivo;</li>
              <li><FontAwesomeIcon icon={faCheckCircle}/> Viável e portátil.</li>
            </ul>
            </Col>
                        
        </Row>
        
          <Row >
              <Col>
              <span style={{fontSize:"3vw"}}>Nossos jogos!</span>
              </Col>
          </Row>
          <Row>
          <Col xs={1} md={1}></Col>
          <Col xs={10} md={10}>
          <CardGroup style={{
          marginTop:'6vw',
          marginBottom:'6vw'
          }} className='EfctvCardG'>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{textAlign:'center', fontSize:"1.3vw"}}>Título</Card.Title>
                <Card.Text style={{fontSize:"1.1vw", marginLeft:"0.1vw"}}>
                  1.
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item style={{fontSize:"1vw"}}><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração:</ListGroup.Item>
                <ListGroup.Item style={{fontSize:"1vw"}}><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores:</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='Cadastro'>Jogar!</a>
              </Card.Footer>
            </Card>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{textAlign:'center', fontSize:"1.3vw"}}>Título</Card.Title>
                <Card.Text style={{fontSize:"1.1vw", marginLeft:"0.1vw"}}>
                  2.
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item style={{fontSize:"1vw"}}><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração:</ListGroup.Item>
                <ListGroup.Item style={{fontSize:"1vw"}}><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores:</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='Cadastro'>Jogar!</a>
              </Card.Footer>
            </Card>
            <Card className='EfctvCard'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title  style={{textAlign:'center', fontSize:"1.3vw"}}>Título</Card.Title>
                <Card.Text style={{fontSize:"1.1vw", marginLeft:"0.1vw"}}>
                  3.
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item style={{fontSize:"1vw"}}><FontAwesomeIcon icon={faClock}/>&nbsp;&nbsp;Duração:</ListGroup.Item>
                <ListGroup.Item style={{fontSize:"1vw"}}><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;N° de jogadores:</ListGroup.Item>
              </ListGroup>
              <Card.Footer style={{textAlign:'center'}}> 
              <a href='Cadastro'>Jogar!</a>
              </Card.Footer>
            </Card>
          </CardGroup>
          </Col>
          </Row>
          </div>
          <a style={{textAlign:'center', cursor:'pointer',color:'white'}} onClick={()=>scroll.scrollToTop()} >
      <div style={{backgroundColor:'black'}} className='Topo'>
      <FontAwesomeIcon icon={faCaretSquareUp} size="lg" />
      </div></a>
        </Container>
      </div>
  </React.Fragment>
    
  );
}

export default App;