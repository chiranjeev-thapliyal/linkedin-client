import MessengerSearchIcon from '../../assets/svg/MessengerSearchIcon';
import MessengerSearchOptions from '../../assets/svg/MessengerSearchOptions';

const Search = () => {
  return (
    <div className='search'>
      <div className='input-container'>
        <li>
          <MessengerSearchIcon />
        </li>
        <input
          type='text'
          name='message'
          id='message'
          placeholder='Search Messages'
        />
        <div className='search-options'>
          <button>
            <MessengerSearchOptions />
          </button>
          <div className='options-list-wrapper'>
            <ul className='options-list'>
              <li>All Messages</li>
              <li>Archived</li>
              <li>My Connections</li>
              <li>Unread</li>
              <li>InMail</li>
              <li>Spam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
