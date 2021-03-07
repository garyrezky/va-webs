import React from 'react' 
import { Container, Row, Col } from 'react-bootstrap'
import member1 from '../assets/img/member1.png'
import member2 from '../assets/img/member2.png'
import member3 from '../assets/img/member3.png'
import clapper from '../assets/img/clapper.png'
import { FaShareAlt } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

const RightSideBar = () => {
    return (
        <div>
            {/* <p>this is Right Side Bar</p> */}
            <img src={clapper} className="clapper"/>

            <Container>
                <div className="rightSide2">

                {/* <img src={bali} /> */}
                <br />
                <br />
                <br />
                <br />
                <br />
            </div><br />
            <div className="rightSide4">
                <h3> Most</h3>
                <a href=""><h3 style={{color: '#930000'}}><AiFillLike /> </h3></a>
                <div className="leftSide2">
                <br />
                    <Row>
                        <Col className="data">
                        <img src={member1} /> 
                        </Col>
                        <Col className="fill">
                        <p></p>
                        <p className="most"> 35 K</p>
                        </Col>
                    </Row>
                <br />  
                    <Row>
                        <Col className="data">
                        <img src={member3} /> 
                        </Col>
                        <Col className="fill">
                        <p></p>
                        <p className="most">35 K</p>
                        </Col>
                    </Row>
                <br />  
                    <Row>
                        <Col className="data">
                        <img src={member2} /> 
                        </Col>
                        <Col className="fill">
                        <p></p>
                        <p className="most">35 K</p>
                        </Col>
                    </Row>
                <a href=""><p>More ▽</p></a>  
            </div>
            </div><br />
            <div className="rightSide4">
                <h3> Most</h3>
                <a href=""><h3 style={{color: '#930000'}}><FaShareAlt /> </h3></a>
                <div className="leftSide2">
                <br />
                    <Row>
                        <Col className="data">
                        <img src={member3} /> 
                        </Col>
                        <Col className="fill">
                        <p></p>
                        <p className="most"> 35 K</p>
                        </Col>
                    </Row>
                <br />  
                    <Row>
                        <Col className="data">
                        <img src={member1} /> 
                        </Col>
                        <Col className="fill">
                        <p></p>
                        <p className="most">35 K</p>
                        </Col>
                    </Row>
                <br />  
            </div>
            </div><br />
            </Container>
        </div>
    )
}

export default RightSideBar