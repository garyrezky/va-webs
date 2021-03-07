import React, {useState} from 'react' 
import { Col, Row } from 'react-bootstrap'
import classified from '../assets/img/classified.png'
import Modals from '../modalSignup'
import { FaHome } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { MdNotifications } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';


const NavBars = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <div className="navHeader">
            <Row>
                <Col sm={6}>
                <a href="/"><h1>Voorale</h1></a>
                </Col>
                <Col sm={1}>
                    <div className="containerNotif">
                    <a href="/GeneralMember" className="navIcon"><h2><FaHome /> </h2>
                    <p >9</p>
                    </a>
                    </div>
                </Col>
                <Col sm={1}>
                    <div className="containerNotif">
                    <a href="/CulturalBase" className="navIcon"><h2><TiGroup /> </h2>
                    <p >9</p>
                    </a>
                    </div>
                </Col>
                <Col sm={1}>
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
                <Col sm={1}>
                    <div className="containerNotif">
                        <a href="">
                        <img src={classified} />
                        <p className="classifiedIcon">9</p>
                        </a>
                    </div>
                </Col>
                <Col sm={1}>
                    <div className="containerNotif">
                        {/* <a onClick={() => setModalShow(true)}>
                        <img src={chat} />
                        <p>9</p>
                        </a> */}
                    <a href="" className="navIcon"><h2><MdNotifications />
                     </h2>
                    <p >9</p>
                    </a>

                    </div>
                </Col>
            </Row>
            <Modals show={modalShow} onHide={() => setModalShow(false)} />
            
            </div>
        </div>
    )
}

export default NavBars