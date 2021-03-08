import React, {useState} from 'react' 
import { Col, Row } from 'react-bootstrap'
import logo from './assets/img/name_logo.png'
import classified from './assets/img/classified.png'
import { FaHome } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { BiMessageDetail } from 'react-icons/bi';


const NavBars = () => {
    return (
        <div>
            <div className="navHeader">
            <Row>
                <Col md={6}>
                <a href="/"><img src={logo} className="logo" width="20%"/></a>
                </Col>
                <Col>
                    <div className="containerNotif">
                    <a href="/GeneralMember" className="navIcon"><h2><FaHome /> </h2>
                    <p >9</p>
                    </a>
                    </div>
                </Col>
                <Col>
                    <div className="containerNotif">
                    <a href="/CulturalBase" className="navIcon"><h2><TiGroup /> </h2>
                    <p >9</p>
                    </a>
                    </div>
                </Col>
                <Col>
                    <div className="containerNotif">
                        {/* <a onClick={() => setModalShow(true)}>
                        <img src={chat} />
                        <p>9</p>
                        </a> */}
                    <a href="" className="navIcon"><h2><BiMessageDetail />
                     </h2>
                    <p >9</p>
                    </a>

                    </div>
                </Col>
                <Col>
                    <div className="containerNotif1">
                        <a href="/MainMCC">
                        <img src={classified} />
                        <p className="classifiedIcon1">5</p>
                        </a>
                    </div>
                </Col>
                
            </Row>
            
            </div>
        </div>
    )
}

export default NavBars