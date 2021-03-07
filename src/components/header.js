import React from 'react'
import { Col, Container, Row, Nav, Form, NavDropdown } from 'react-bootstrap'
import header from './assets/img/header.png'
import { MdNotifications } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import saparua from './assets/img/saparua.png'
import andy from './assets/img/andy.jpg'
import liew from './assets/img/liew.jpg'
import tellus from './assets/img/tellus.png'


const Header = () => {
    return (
        <div>
            <div className="profile1">
                
                <Row>
                    <Col md={2}>

                    <div className="leftSide1">
                    <h2>Landmark</h2>
                    <h3>Saparua</h3>
                    <img src={saparua} /><br/>
                    <a href=""><p>More ▽</p></a>
                    </div><br />
                    {/* </Container> */}

                    </Col>
                    <Col md={8}>
                    {/* <Container> */}

                    <img src={header} className="banner"/>
                    <Row>
                    <img src={andy} className="chandra"/>
                
                        <Col sm={7}>
                        <div className="user">
                        <h3 >Andy Eric Manuhutu <p> Married To 
                        <img src={liew} className="marital"/>
                            Liew Yan Mei</p></h3>
                        </div>
                        </Col>
                        <Col sm={1}>
                        <a href="" className="navIcon"><h2><MdNotifications /> </h2>
                        <p>5</p>
                        </a>
                        </Col>
                        <Col sm={1}>
                        <a href="" className="edit"><h2><FiEdit />
                        </h2> 
                        <p>Edit Profile</p>
                        </a>
                        </Col>
                    </Row>
                    <hr />
                    {/* </Container> */}

                    </Col>
                    <Col md={2}>

                    <div className="rightSide1">
                    <img src={tellus} />
                    <h2>Your Fav Places to see in your town</h2>
                    </div><br />
                    
                    </Col>

                </Row>
            
            </div>
        </div>

    )
    
}

export default Header