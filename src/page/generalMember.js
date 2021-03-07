import React from 'react' 
import {Row, Col } from 'react-bootstrap'
import '../App.css'
import LeftSideBar from '../components/leftSideBar'
import NavBars from '../components/navbar'
import Header2 from '../components/header2'
import Profile from '../components/profile'
import RightSideBar from '../components/rightSideBar'

const GeneralMember = () => {
    return (
        <div>
            <NavBars />
            <br />
            General Member
            <Header2 />

            <Row>
                <Col lg={3}>
                <LeftSideBar />
                </Col>

                <Col lg={7}>
                <Profile />
                </Col>

                <Col lg={2}>
                <RightSideBar />
                </Col>
            </Row>
        </div>
    )
}

export default GeneralMember
