import React from 'react' 
import {Row, Col } from 'react-bootstrap'
import '../App.css'
import LeftSideBar from '../components/leftSideBar'
import NavBars from '../components/navbar'
import Header from '../components/header'
import Profile2 from '../components/profile2'
import RightSideBar from '../components/rightSideBar'

const MainMCC = () => {
    return (
        <div>
            <NavBars />
            Main MCC
            <Header />

            <Row>
                <Col lg={3}>
                <LeftSideBar />
                </Col>

                <Col lg={7}>
                <Profile2 />
                </Col>

                <Col lg={2}>
                <RightSideBar />
                </Col>
            </Row>
        </div>
    )
}

export default MainMCC
