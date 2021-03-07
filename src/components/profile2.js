import React from 'react' 
import { Col, Container, Row, Nav, Form, NavDropdown } from 'react-bootstrap'
import { AiFillLike } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { IoMdChatboxes } from 'react-icons/io';
import { RiStarFill } from 'react-icons/ri';
import car from './assets/img/car.png'
import chandra from './assets/img/chandra.png'
import iphone from './assets/img/iphone.png'
import { SiApple } from 'react-icons/si';
import { RiSpotifyLine } from 'react-icons/ri';
import { FcIdea } from 'react-icons/fc';

const Profile2 = () => {
    return (
        <div>
            {/* <p>this is profile cultural</p> */}
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
            <a href="" class="dropbtn"><h2><BiMenu /> </h2></a>

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
                    <img src={chandra}/>
                    <p>Andre</p>
                    <div className="star">
                        <h2><RiStarFill /> </h2>
                    </div>
                    {/* <h2>
                    <img src={chandra}/>
                    <AiFillLike /></h2>
                    <p>Andre</p> */}
                    </Col>
                    <Col>
                    <img src={chandra}/>
                    <p>Chandra</p>
                    </Col>
                    <Col>
                    <img src={chandra}/>
                    <p>Enteng</p>
                    </Col>
                    <Col>
                    {/* <img src={chandra}/> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src={chandra}/>
                    <p>Richard</p>
                    </Col>
                    <Col>
                    <img src={chandra}/>
                    <p>Deviana</p>
                    </Col>
                    <Col>
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
                    <Col>
                    <p>This Morning i received a shocking news, the sudden passing of one of my very best friends
                        Dharma Sadini at 5.00 AM Saturday, in Los Angeles. Rest in Peace my brother... you are in
                        greatest hands now... The Lord will take care of your family. Miss you bro; miss singing 
                        and performing with you in our band the 4Q. poke Taufan Gsf.
                    </p>
                <hr/>
                    <Row>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><AiFillLike /> </h2></a>
                        </Col>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><IoMdChatboxes /> </h2></a>
                        </Col>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><FaShareAlt /> </h2></a>
                        </Col>
                    </Row>
                <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    <h3>MCC</h3>
                    </Col>
                    <Col>
                    <div className="grup">
                
               <iframe width="90%" height="345" src="https://www.youtube.com/embed/RgKAFK5djSk?controls=0"><br/>
               </iframe>

            </div> 
                <Row>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><AiFillLike /> </h2></a>
                        </Col>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><IoMdChatboxes /> </h2></a>
                        </Col>
                        <Col sm={2}>
                        {/* <a href="" style={{color: '#930000'}}><h2><FaShareAlt /> </h2></a> */}
                        </Col>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><FcIdea /> </h2></a>
                        </Col>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><FcIdea /> </h2></a>
                        </Col>
                        
                    </Row>
                    <div className="iphone">
                     <img src={iphone} />
                    </div><br/>
                    </Col>
                    <hr />
                </Row>
                <Row>
                    
                    <Col sm={1}>
                    <img src={chandra} />
                    </Col>
                    
                    <Col>
                    <p>This Morning i received a shocking news, the sudden passing of one of my very best friends
                        Dharma Sadini at 5.00 AM Saturday, in Los Angeles. Rest in Peace my brother... you are in
                        greatest hands now... The Lord will take care of your family. Miss you bro; miss singing 
                        and performing with you in our band the 4Q. poke Taufan Gsf.
                    </p>
                <hr/>
                    <Row>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><AiFillLike /> </h2></a>
                        </Col>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><IoMdChatboxes /> </h2></a>
                        </Col>
                        <Col sm={2}>
                        <a href="" style={{color: '#930000'}}><h2><FaShareAlt /> </h2></a>
                        </Col>
                    </Row>
                <hr/>
                    </Col>
                </Row>
                
            </div><br />
            </div>
            
            </Container>
        </div>
    )
}

export default Profile2