import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends = ['Akash', 'Jowel', 'Rojin', 'Niley'];
  const nayoks = ['Rajjak', 'Bappi', 'Akomgir', 'Salman', 'Sakib', 'Shuvo'];
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {
          friends.map(friend=> <Friend friend={friend}> </Friend>)
        }
        

        <p>My react project</p>
        <Counter></Counter>
        <Users></Users>
        <Person nayok={nayoks.[0]} nayika="Shabana"></Person>
        <Person nayok="BappaRaj" nayika="Cheka"></Person>
        <Person nayok="Rubel" nayika="Moushumi"></Person>
        <Person nayok="Elias kanchan" nayika="Diti"></Person>
      </header>
    </div>
  );
}
function Users() {
  const [ users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data));
  })

  return (
    <div>
      <h1>Dynamic Users:</h1>
      <ul>
          {
            users.map(users=> <li>{users.name}</li>)
          }
        </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease =() => setCount(count + 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}


function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    width: '400px',
    color: 'tomato',
    margin: '15px'
  }

  return (
    <div style={personStyle}>
      <h1>Nayok:{props.nayok}</h1>
      <h3>Nayika:{props.nayika}</h3>
    </div>
  )
};
function Product(props) {
  const productStyle = {
    border: '5px solid gray',
    borderRadius: '5px',
    backgroundColor: 'blue',
    height: '250px',
    width: '250px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h1>{props.product.name}</h1>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
};
function Friend(props) {
  const friendStyle = {
    border: '5px solid gray',
    borderRadius: '10px',
    backgroundColor: 'tomato',
    height: '100px',
    width: '100px',
    float: 'left'
  }
  return (
    <div style={friendStyle}>
      <h3>{props.friend}</h3>
    </div>
  )
};
export default App;
