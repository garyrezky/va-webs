import React from 'react' 
import { Container } from 'react-bootstrap'
import monas from './assets/img/monas.jpg'
import bali from './assets/img/bali.png'
import cheers from './assets/img/cheers.png'
import meeting from './assets/img/meeting.png'
import couples from './assets/img/couples.png'
import manager from './assets/img/manager.png'
import classifieds from './assets/img/classifieds.png'
import collecion from './assets/img/collecion.png'

const RightSideBar = () => {
    return (
        <div>
            {/* <p>this is Right Side Bar</p> */}
            <Container>
            <div className="rightSide2">
            <img src={classifieds} />

                <p>AJPF</p>
                <p>Atis & The Tradewind</p>
                <p>Ex Los Angeles</p>
                <p>Bali.Kei Archipelago</p>
            </div><br />

            <div className="rightSide3">
            <img src={collecion} className="collecion"/>

                <img src={cheers} />
                <img src={manager} />
                <img src={meeting} />
                <img src={monas} />
                <img src={couples} />
            </div><br />

            <div className="rightSide4">
                <img src={bali} />  
            </div>
            </Container>
        </div>
    )
}

export default RightSideBar