import React from 'react' 
import { Container, Row, Col } from 'react-bootstrap'
import member1 from '../assets/img/member1.png'
import member2 from '../assets/img/member2.png'
import member3 from '../assets/img/member3.png'
import member4 from '../assets/img/member4.png'
import member5 from '../assets/img/member5.png'
import member6 from '../assets/img/member6.png'
import member7 from '../assets/img/member7.png'
import member8 from '../assets/img/member8.png'
import chandra from '../assets/img/chandra.png'
import billboard from '../assets/img/billboard.png'

const LeftSideBar = () => {
    return (
        <div>
            {/* <p>this is Left Side Bar</p> */}
            <Container>
            <br/>

            <Row>
            <img src={chandra} className="chandra2"/>
                
                <Col>
                <div className="user">
                <h5 style={{color: 'black'}}>Andy Eric Manuhutu</h5>
                </div>
                </Col>
            </Row>
            <div className="leftSide6">
                <h4>Member's Choice</h4>
                <br/>
                <div >
                    <Row>
                        <Col>
                        <img src={member4} /> 
                        </Col>
                        <Col >
                        <img src={member5} /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={member6} /> 
                        </Col>
                        <Col >
                        <img src={member2} /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={member3} /> 
                        </Col>
                        <Col >
                        <img src={member1} /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={member2} /> 
                        </Col>
                        <Col >
                        <img src={member7} /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={member8} /> 
                        </Col>
                        <Col >
                        <img src={member6} /> 
                        </Col>
                    </Row>
                <a href=""><p>More ▽</p></a>  

            </div>
            </div><br />
            <div className="leftSide6">
            <h3>BillBoard</h3>
            <img src={billboard} />
            </div><br />
            </Container>
        </div>
    )
}

export default LeftSideBar