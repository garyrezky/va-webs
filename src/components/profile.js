import React, {useState} from 'react' 
import Modals from '../components/modalSignup'
import { Col, Container, Row, Nav, Form, NavDropdown } from 'react-bootstrap'
import { AiFillLike } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { IoMdChatboxes } from 'react-icons/io';
import car from './assets/img/car.png'
import chandra from './assets/img/chandra.png'
import andre from './assets/img/andre.png'
import enteng from './assets/img/enteng.png'
import richard from './assets/img/richard.png'
import deviana from './assets/img/deviana.png'
import Chats from './chat';

const Profile = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            {/* <p>this is profile member</p> */}
            <Container>

            <div className="profile1">
          
            <div className="underForm">
            <Nav defaultActiveKey="/Snippets" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/Snippets">Snippets</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Pals <i>3250</i></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Image</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Classified</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Tales</Nav.Link>
            </Nav.Item>
            <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <img src={chandra} className="imgform"/>
            <Form.Control placeholder="Let us know your thoughts" as="textarea" rows={3}/>
            <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item className="underForm" as="li">
                <Nav.Link href="/home">Pals Request
                <p>9</p>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1">Billboard  
                <p>9</p>
                </Nav.Link>
            </Nav.Item>
            {/* <NavDropdown id="basic-nav-dropdown">

                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            <div class="dropdown1">
            {/* <button class="dropbtn">Dropdown</button> */}
            <a class="dropbtn"><h2><BiMenu /> </h2></a>

            <div class="dropdown-content">
            <a href="#">Mom</a>
            <a href="#">Dad</a>
            <a href="#">Siblings</a>
            <a href="#">Cousins</a>
            <a href="#">Best Friends</a>
            <a href="#">Friends at Work</a>
            <a href="#">Business Friends</a>
            <a href="#">General Friends</a>

            </div>
            </div>
            </Nav>
            </div>
            <div className="grup">
                <Container>
                <Row>
                    <Col>
                    <a onClick={() => setModalShow(true)}><img src={andre}/>
                    <p>Andre</p>
                    </a>
                    </Col>
                    <Col>
                    <a href=""><img src={chandra}/>
                    <p>Chandra</p>
                    </a>
                    </Col>
                    <Col>
                    <a href=""><img src={enteng}/>
                    <p>Enteng</p>
                    </a>
                    </Col>
                    <Col>
                    {/* <img src={chandra}/> */}
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <a href=""><img src={richard}/>
                    <p>Richard</p>
                    </a>
                    </Col>
                    <Col>
                    <a href=""><img src={deviana}/>
                    <p>Deviana</p>
                    </a>
                    </Col>
                    <Col >
                    {/* <img src={chandra}/> */}
                    </Col>
                    <Col >
                    {/* <img src={chandra}/> */}
                    </Col>
                </Row>
                </Container>
            </div> <br />
            <div className="car">
                <img src={car} />
            </div><br/>
            <div className="reviews">
            <br/>
                <Row>
                    <Col sm={1}>
                    <img src={chandra} />
                    </Col>
                    <Col sm={11}>
                    <p>This Morning i received a shocking news, the sudden passing of one of my very best friends
                        Dharma Sadini at 5.00 AM Saturday, in Los Angeles. Rest in Peace my brother... you are in
                        greatest hands now... The Lord will take care of your family. Miss you bro; miss singing 
                        and performing with you in our band the 4Q. poke Taufan Gsf.
                    </p>
                <hr/>
                    <Row>
                        <Col >
                        <a href="" style={{color: '#930000'}}><h2><AiFillLike /> </h2></a>
                        </Col>
                        <Col >
                        <a href="/MusicCulture" style={{color: '#930000'}}><h2><IoMdChatboxes /> </h2></a>
                        </Col>
                        <Col>
                        <a href="" style={{color: '#930000'}}><h2><FaShareAlt /> </h2></a>
                        </Col>
                    </Row>
                <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    <img src={chandra} />
                    </Col>
                    <Col sm={11}>
                    <p>This Morning i received a shocking news, the sudden passing of one of my very best friends
                        Dharma Sadini at 5.00 AM Saturday, in Los Angeles. Rest in Peace my brother... you are in
                        greatest hands now... The Lord will take care of your family. Miss you bro; miss singing 
                        and performing with you in our band the 4Q. poke Taufan Gsf.
                    </p>
                <hr/>
                    <Row>
                        <Col>
                        <a href="" style={{color: '#930000'}}><h2><AiFillLike /> </h2></a>
                        </Col>
                        <Col>
                        <a href="/MusicCulture" style={{color: '#930000'}}><h2><IoMdChatboxes /> </h2></a>
                        </Col>
                        <Col>
                        <a href="" style={{color: '#930000'}}><h2><FaShareAlt /> </h2></a>
                        </Col>
                    </Row>
                <hr/>
                    </Col>
                </Row>
            <br />
            <br />
            </div>
            </div><br />
            <Chats show={modalShow} onHide={() => setModalShow(false)} />

            </Container>
        </div>
    )
}

export default Profile