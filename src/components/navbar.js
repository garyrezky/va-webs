import React, {useState} from 'react' 
import { Col, Row } from 'react-bootstrap'
import home from './assets/img/home.png'
import chat from './assets/img/chat.png'
import grup from './assets/img/grup.jpg'
import classified from './assets/img/classified.png'
import Modals from '../components/modalSignup'
import { FaHome } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { BiMessageDetail } from 'react-icons/bi';


const NavBars = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <div className="navHeader">
            <Row>
                <Col md={6}>
                <a href="/"><h1>Voorale</h1></a>
                </Col>
                <Col md={1}>
                    <div className="containerNotif">
                    <a href="/GeneralMember" className="navIcon"><h2><FaHome /> </h2>
                    {/* <p >9</p> */}
                    </a>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="containerNotif">
                    <a href="/CulturalBase" className="navIcon"><h2><TiGroup /> </h2>
                    {/* <p >9</p> */}
                    </a>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="containerNotif">
                        {/* <a onClick={() => setModalShow(true)}>
                        <img src={chat} />
                        <p>9</p>
                        </a> */}
                    <a href="" className="navIcon"><h2><BiMessageDetail />
                     </h2>
                    {/* <p >9</p> */}
                    </a>

                    </div>
                </Col>
                <Col md={1}>
                    <div className="containerNotif">
                        <a href="/MusicCulture">
                        <img src={classified} />
                        {/* <p className="classifiedIcon">5</p> */}
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