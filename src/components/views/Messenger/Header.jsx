import MessengerEllips from '../../assets/svg/MessengerEllipsis';
import MessengerMessage from '../../assets/svg/MessengerMessage';
import MessengerUpArrow from '../../assets/svg/MessengerUpArrow';

const Header = ({ handleClick, user, open }) => {
  return (
    <div className='header' onClick={handleClick}>
      <div className='messenger-left'>
        <div className='messenger-user-pic'>
          <img
            src={
              user.profile_img ||
              'https://static-exp1.licdn.com/sc/h/1c5u578iilxfi4m4dvc4q810q'
            }
            alt={
              user.first_name && user.last_name
                ? `${user.first_name} ${user.last_name}`
                : `user name`
            }
          />
          <div className='messenger-online-indicator'></div>
        </div>
        <h4 className='messenger-heading'>Messaging</h4>
      </div>
      <div className='messenger-right'>
        <button className='messenger-more-options'>
          <MessengerEllips />
        </button>
        <button className='messenger-more-options'>
          <MessengerMessage />
        </button>
        <button className={`messenger-more-options ${open && 'rotate-180'}`}>
          <MessengerUpArrow />
        </button>
      </div>
    </div>
  );
};

export default Header;
