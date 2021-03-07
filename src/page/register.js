import React, {useState} from 'react'
import Modals from '../components/modalSignup'
import Maps from '../components/maps'
import Bali from '../components/assets/img/bali.png'
import logo from '../components/assets/img/n.png'
import '../App.css'

import { Button, Col, Row, Container, Form } from 'react-bootstrap'

const Register = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            {/* <h1>ini register</h1> */}
            <Row>
                <Col className="sidebar" lg={3}>
                <div>
                    <img src={logo} />

                </div>
                <img src={Bali} />
                
                </Col>
                <Col sm={9}>
                    {/* <a onClick={() => setModalShow(true)}> */}
                    
                    <Maps />

                    {/* </a> */}
                 
                </Col>
            </Row>
            <div className="footer-login">
                <Row>
                    <Col lg={4}>
                    <h1>Voorale</h1>
                    </Col>
                    <Col>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                    Sign Up
                    </Button>
                    <Button href="/GeneralMember">Main</Button>

                    <Button href="/">Login</Button>

                    <Modals show={modalShow} onHide={() => setModalShow(false)} />
                    
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Register