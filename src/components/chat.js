import React, {useEffect} from 'react' 
import { Chat, addResponseMessage } from 'react-chat-popup';
import { Modal} from 'react-bootstrap';
import andre from '../components/assets/img/andre.png'

const Chats = (props) => {
    useEffect(() => addResponseMessage("Welcome to this awesome chat!"), []);
      

    //   componentDidMount() {
    //     addResponseMessage("Welcome to this awesome chat!");
    //   }
    return (
        <div>
            <Modal {...props}>
            
            <Chat
                profileAvatar={andre}
                title="My new awesome title"
                subtitle="And my cool subtitle" />
                </Modal>
        </div>
    )
}

export default Chats
