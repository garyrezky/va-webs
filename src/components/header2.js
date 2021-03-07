import React from 'react'
import { Col, Container, Row, Nav, Form, NavDropdown } from 'react-bootstrap'
import header from './assets/img/header.png'
import { MdNotifications } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import monas from './assets/img/monas.jpg'
import chandra from './assets/img/chandra.png'
import tellus from './assets/img/tellus.png'


const Header2 = () => {
    return (
        <div>
            <div className="profile1">
                
                <Row>
                    <Col lg={2}>
                    <div className="leftSide1">
                    <h2>Landmark</h2>
                    <h3>Jakarta Pusat</h3>
                    <img src={monas} /><br/>
                    <a href=""><p>More ▽</p></a>
                    </div><br /> 
                    </Col>
                    <Col lg={8}>
                    <img src={header} className="banner"/>
            
                    <Row>
                    <img src={chandra} className="chandra"/>
                        
                        <Col sm={7}>
                        <div className="user">
                        <h3 >Chandra Darusman <p> Single</p></h3>
                        </div>
                        </Col>
                        <Col sm={1}>
                        <a href=""><h2><MdNotifications /> </h2></a>
                        </Col>
                        <Col sm={1}>
                        <a href="" className="edit"><h2><FiEdit />
                        </h2> 
                        <p>Edit Profile</p>
                        </a>
                        
                        </Col>
                        {/* <Col sm={2}>
                        <div className="user">
                        <p>Edit Profile</p>
                        </div>
                        </Col> */}
                    </Row>
                    <hr />

                    </Col>
                    <Col lg={2}>
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

export default Header2