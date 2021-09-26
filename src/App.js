import './App.css';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import itemsTransaction from './data/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        ava={user.ava}
        stats={user.stats}
      ></Profile>

      <Statistics stats={statisticalData} title="Upload stats"></Statistics>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={itemsTransaction}></TransactionHistory>
    </Container>
  );
}

export default App;
