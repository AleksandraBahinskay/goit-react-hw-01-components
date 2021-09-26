import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.online ? s.online : s.offline}></span>
          <img
            className={s.ava}
            src={friend.ava}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  ava: PropTypes.string,
  online: PropTypes.bool,
};

export default FriendList;
