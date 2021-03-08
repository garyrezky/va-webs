import React from 'react' 
import { Col, Container, Row, Nav, NavDropdown } from 'react-bootstrap'
import { AiFillLike } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';
import { IoMdChatboxes } from 'react-icons/io';
import { RiSpotifyLine } from 'react-icons/ri';
import iphone from '../assets/img/iphone.png'
import chandra from '../assets/img/chandra.png'

const Profile = () => {
    return (
        <div>
            {/* <p>this is profile member</p> */}
            <Container>
            <div className="profile2">
            <h1><b>MUSIC CULTURE</b></h1>
            <div className="underForm">
            <Nav defaultActiveKey="/Snippets" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/Snippets">Pop</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">RnB</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Blues</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Jazz</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Rock</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Indo</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Pop</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home">Alternative</Nav.Link>
            </Nav.Item>
            <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <hr />

            </div>
            <div className="grup">
                <Container>
                    <br />
               <h3>The Latest Incursion</h3>
               <iframe width="100%" height="345" src="https://www.youtube.com/embed/RgKAFK5djSk?controls=0"><br/>
               </iframe>
                <br />
                <a href=""><h2><AiFillLike /> </h2></a>
                <a href=""><h2><IoMdChatboxes /> </h2></a>
                <a href=""><h2><FaShareAlt /> </h2></a>
                <a href=""><h2 style={{color: 'black'}}><RiSpotifyLine /> </h2></a>
                <a href=""><h2 style={{color: 'black'}}><SiApple /> </h2></a>
               </Container>
            </div> <br />
            <div className="car">
                <img src={iphone} />
            </div><br/>
            <div className="reviews">
            <br/>
                <Row>
                    <Col sm={1}>
                    <img src={chandra} />
                    </Col>
                    <Col sm={11}>
                     <p>Wow this is as awesome video</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                    <img src={chandra} />
                    </Col>
                    <Col sm={11}>
                     <p>Mantab</p>
                    </Col>
                </Row>
            <br />
            <br />
            <br />
            <br />
            </div>
            </div>
            </Container>
        </div>
    )
}

export default Profile