import React from 'react' 
import {Row, Col, Container } from 'react-bootstrap'
import '../App.css'
import Header from '../components/header'
import LeftSideBar2 from '../components/leftSideBar2'
import NavBars from '../components/navbar'
import Profile2 from '../components/profile2'
import RightSideBar from '../components/rightSideBar'

const CulturalBase = () => {
    return (
        <div>
            <NavBars />
            Cultural Base Member
            <Header />
            <Row>
                <Col lg={3}>
                <LeftSideBar2 />
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

export default CulturalBase
