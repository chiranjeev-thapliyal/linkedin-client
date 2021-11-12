import ChatVideo from '../../assets/svg/ChatVideo';
import ChatClose from '../../assets/svg/ChatClose';
import ChatResize from '../../assets/svg/ChatResize';
import ChatImage from '../../assets/svg/ChatImage';
import ChatAttachment from '../../assets/svg/ChatAttachment';
import ChatGIF from '../../assets/svg/ChatGIF';
import ChatEmoji from '../../assets/svg/ChatEmoji';
import MessengerEllipsis from '../../assets/svg/MessengerEllipsis';
import MessengerUpArrow from '../../assets/svg/MessengerUpArrow';
import { useContext, useState } from 'react';
import { socketContext } from '../../../context/SocketContextProvider';
import NewMessage from './NewMessage';
import { toCapitalize } from '../../../utils/common.utils';

const ChatBox = ({ friend, messages }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { socket, email } = useContext(socketContext);

  const [text, setText] = useState('');

  const handleInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('send-message', email, 'c@c.com', text);
  };

  return (
    <div className={`chat-box ${open ? 'chat-box-open' : 'chat-box-close'}`}>
      <header onClick={handleClick}>
        <div className='presence-entity'>
          <img
            src={
              friend?.profile_img ||
              'https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q'
            }
            alt={friend?.first_name}
          />
          <div className='online-indicator'></div>
        </div>
        <div className='header-wrapper'>
          <h4>{`${toCapitalize(friend?.first_name)} ${toCapitalize(
            friend?.last_name
          )}`}</h4>
          <p>Available on mobile</p>
        </div>
        <div className='header-controls'>
          <button>
            <MessengerEllipsis />
          </button>
          <button>
            <ChatVideo />
          </button>
          <button>
            <ChatResize />
          </button>
          <button>
            <ChatClose />
          </button>
        </div>
      </header>

      <main>
        {messages?.map((msg) => (
          <NewMessage msg={msg} />
        ))}
        {/* <li className='message-list__event'>
          <div className='msg-listitem'>
            <div className='listitem__message-bubble'>
              <div className='listitem__message-indicator'>
                <div className='listitem__message-content'>
                  Course se related nahi hai xD
                </div>
              </div>
            </div>
          </div>
        </li> */}
      </main>

      <form>
        <div className='new-message'>
          <div className='new-message-input'>
            <textarea
              onChange={handleInput}
              name='new-message-txt'
              placeholder='Write a message...'
            ></textarea>
            <button>
              <MessengerUpArrow />
            </button>
          </div>
        </div>
        <footer>
          <div className='form-left-actions'>
            <button>
              <ChatImage />
            </button>
            <button>
              <ChatAttachment />
            </button>
            <button>
              <ChatGIF />
            </button>
            <button>
              <ChatEmoji />
            </button>
          </div>
          <div className='form-right-actions'>
            <button
              id='chat-send'
              className='btn-disabled'
              onClick={handleSubmit}
            >
              Send
            </button>
            <button className='more-options'>
              <MessengerEllipsis />
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default ChatBox;
