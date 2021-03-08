import React from 'react' 
import {Row, Col } from 'react-bootstrap'
import '../App.css'
import LeftSideBar from '../components/musicCulture/leftSideBar'
import NavBars from '../components/musicCulture/navbar'
import Profile from '../components/musicCulture/profile'
import RightSideBar from '../components/musicCulture/rightSideBar'

const MusicCulture = () => {
    return (
        <div>
            <NavBars />
            <Row>
                <Col>
                <LeftSideBar />
                </Col>

                <Col lg={7}>
                <Profile />
                </Col>

                <Col >
                <RightSideBar />
                </Col>
            </Row>
        </div>
    )
}

export default MusicCulture
