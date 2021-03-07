import React from 'react' 
import { Container, Row, Col } from 'react-bootstrap'
import saparua from './assets/img/saparua.png'
import artefact from './assets/img/artefact.png'
import bni from './assets/img/bni.png'
import cultural from './assets/img/cultural.jpg'

const LeftSideBar2 = () => {
    return (
        <div>
            {/* <p>this is Left Side Bar</p> */}
            <Container>

            <div className="leftSide2">
            <p>BIO</p>
            <p>From: Arcadia, CA, USA</p>
            <p>Now: Tangerang, Banten, Indonesia</p>
            <a href=""><p>More ▽</p></a>
            </div><br />

            <div className="leftSide3">
            <img src={artefact} />
            </div><br />

            <div className="leftSide5">
            <img src={cultural} />
            <Container>
           <Row>
                <Col sm={4} className="data">
                <p >Negeri: </p>
                </Col>
                <Col sm={6} className="fill">
                <p >Haria</p>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="data">
                <p >Location: </p>
                </Col>
                <Col sm={6} className="fill">
                <p >Saparua Island</p>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="data">
                <p >Bp Raja: </p>
                </Col>
                <Col sm={6} className="fill">
                <p >J. Manuhutu</p>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="data">
                <p >Clan: </p>
                </Col>
                <Col sm={6} className="fill">
                <p >Manuhutu Hukom</p>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="data">
                <p >Pel/Ga: </p>
                </Col>
                <Col sm={6} className="fill">
                <p >Hutumuri, Sirsori, Tami-Louw, Waai</p>
                </Col>
            </Row>
            </Container>
            </div><br />

            <div className="leftSide4">
            <img src={bni} />
            </div>
            </Container>
        </div>
    )
}

export default LeftSideBar2