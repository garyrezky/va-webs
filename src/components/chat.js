import React, {useState, useEffect} from 'react' 
import { Chat, addResponseMessage } from 'react-chat-popup';
import { Modal, Col, Row } from 'react-bootstrap';
import andre from '../components/assets/img/andre.png'


const Chats = (props) => {
    const {name} = props
    const date = new Date();
    let min = date.getMinutes();
    let hour = date.getHours();
    if (min < 10){
        min = '0'+min
    }
    if (hour < 10){
        hour = '0'+hour
    }
    const waktu = hour+':'+min
    const personChat = [
        {'name': 'Andre', 'chat': 'Hi! How are you?', 'time': '10:00' },
        {'name': 'Chandra', 'chat': 'Have you read the lattest news?', 'time': '01:10'}, 
        {'name': 'Enteng', 'chat': 'Please send me the Document', 'time': '22:19'}, 
        {'name': 'Richard', 'chat': 'Hello, Good Day Sir! How are you?', 'time': '15:45'},
        {'name': 'deviana', 'chat': 'Helloo', 'time': '16:45'}]
    const findChat = personChat.find(person => person.name === name)
    const [chat, isChat] = useState ({
        chatContent : ''
    })
    // console.log(findChat.name, 'cari nama')
    const handleChange = (e) => {
        const { name, value } = e.target;
        isChat({
            ...chat,
            [name]: value,
        });
    };
    const [array, setArray] = useState([])
    const { chatContent } = chat;
    const handleSubmit = (e) => {
        e.preventDefault()
        setArray([...array, { chatContent, waktu }])
        // setArray([...array, {chatContent, waktu}])
        isChat({
            chatContent:''
        })
    }
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <div className='chatBox'>
                <h4>Talk to {name}</h4>
                <div className='chatContent'>
                    { findChat && (findChat.name === name) &&
                    <div className='chatBubble2'>
                        <p>{findChat.chat}</p>
                        <p className='chatTime'>{findChat.time}</p>
                    </div>}
                    {array.length > 0 && array.map((array, idx) => {
                    return (
                    <div key={idx}>
                        <div className='chatBubble'>
                            <p className='chatText'>{array.chatContent}</p>
                            <p className='chatTime'>{array.waktu}</p>
                        </div>
                    </div>
                    )
                })}
                </div>
                <form className='chatForm'>
                    <input value={chatContent} name='chatContent' onChange={handleChange} type='text' onKeyPress={e => {
                        if (e.key === 'Enter') 
                        e.preventDefault();
                    }} placeholder='type something...' />
                    <button type='button' onClick={handleSubmit} className='sendButton'>send</button>
                </form>
            </div>
        </Modal>
    )
}

export default Chats
