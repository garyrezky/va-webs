import React from 'react' 
import { Row, Col, Form, Carousel, Container, Button } from 'react-bootstrap'
import '../App.css'
import Bali from '../components/assets/img/bali.png'
import Carousels from '../components/assets/img/carousel.png'
import logos from '../components/assets/img/name_logo.png'
const Login = () => {
    return (
        <div>
            {/* <h1>ini login</h1> */}
            <Row>
            <Col className="sidebar" lg={3}>
                <div>
                <br />
                <br />
                <Container>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <h4>Form or email</h4>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <h4>Form or email</h4>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                </Form>
                </Container>
                <br />
                <br />
                <br />
                <img src={Bali} content="width=device-width, initial-scale=1.0"/>

                </div>
                </Col>
                <Col >
                <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={Carousels}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={Carousels}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Carousels}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
            <div className="footer-login">
                <Row>
                    <Col lg={4}>
                    <a href="/"><img src={logos} className="logo" width="50%"/></a>
                    </Col>
                    <Col>
                    <form action="/GeneralMember">
                    <button className="button-login" type="submit">Login</button>
                    </form>
                    </Col>
                    <Col >
                    <form action="/Register">
                    <button className="button-creatacc" type="submit">Create Account</button>
                    </form>
                    </Col>
                    <Col sm={3}>
                    <h4>Total Member: <i>500</i>k</h4>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Login