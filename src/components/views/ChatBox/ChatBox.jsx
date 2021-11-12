import ChatVideo from '../../assets/svg/ChatVideo';
import ChatClose from '../../assets/svg/ChatClose';
import ChatResize from '../../assets/svg/ChatResize';
import ChatImage from '../../assets/svg/ChatImage';
import ChatAttachment from '../../assets/svg/ChatAttachment';
import ChatGIF from '../../assets/svg/ChatGIF';
import ChatEmoji from '../../assets/svg/ChatEmoji';
import MessengerEllipsis from '../../assets/svg/MessengerEllipsis';
import MessengerUpArrow from '../../assets/svg/MessengerUpArrow';
import { useContext, useEffect, useRef, useState } from 'react';
import NewMessage from './NewMessage';
import { toCapitalize } from '../../../utils/common.utils';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import ScrollToBottom, {
  useScrollToBottom,
  useSticky,
} from 'react-scroll-to-bottom';

const ChatBox = ({ handleRemoveChat, friend, friendId }) => {
  const scrollToBottom = useScrollToBottom();
  const [sticky] = useSticky();
  const { socket } = useContext(AuthContext);
  const mainRef = useRef(null);

  const {
    email,
    id,
    messages: allMessages,
    newMessage,
  } = useContext(AuthContext);
  const [messages, setMessages] = useState(allMessages[friendId]);

  // useEffect(() => {
  //   if (
  //     (newMessage?.sender?._id === id &&
  //       newMessage?.receiver?._id === friendId) ||
  //     (newMessage?.sender?._id === friendId && newMessage?.receiver?._id === id)
  //   ) {
  //     console.log('new main ref: ', mainRef);
  //     mainRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'end',
  //       inline: 'nearest',
  //     });
  //   }
  // }, [newMessage]);

  useEffect(() => {
    console.log('found new message: ');
    if (
      (newMessage?.sender?._id === id &&
        newMessage?.receiver?._id === friendId) ||
      (newMessage?.sender?._id === friendId && newMessage?.receiver?._id === id)
    ) {
      setMessages([...messages, newMessage]);
    }
  }, [newMessage]);

  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');

  /* Handler for chat box (open/close) */
  const handleClick = () => {
    setOpen(!open);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (toID) => {
    socket.emit('send-message', id, toID, text);
  };

  return (
    <div className={`chat-box ${open ? 'chat-box-open' : 'chat-box-close'}`}>
      <header>
        <div className='presence-entity' onClick={handleClick}>
          <img
            src={
              friend?.profile_img ||
              'https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q'
            }
            alt={friend?.first_name}
          />
          <div className='online-indicator'></div>
        </div>
        <div className='header-wrapper' onClick={handleClick}>
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
          <button onClick={() => handleRemoveChat(friendId)}>
            <ChatClose />
          </button>
        </div>
      </header>

      <main ref={mainRef} id='main-chat-section'>
        <ScrollToBottom className='scrollable'>
          {messages?.map((msg) => (
            <NewMessage msg={msg} />
          ))}
          {!sticky && (
            <button
              followButtonClassName='btn-latest-msg'
              className='btn-latest-msg'
              onClick={scrollToBottom}
            >
              <span>Latest Message</span>
            </button>
          )}
        </ScrollToBottom>
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
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(friendId);
              }}
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
