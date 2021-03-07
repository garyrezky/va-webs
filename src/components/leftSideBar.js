import React from 'react' 
import { Container } from 'react-bootstrap'
import monas from './assets/img/monas.jpg'
import pet from './assets/img/pet.png'
import dki from './assets/img/dki.png'

const LeftSideBar = () => {
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
            <img src={pet} />
            </div><br />

            <div className="leftSide4">
            <img src={dki} />
            </div>
            </Container>
        </div>
    )
}

export default LeftSideBar