import logo from './logo.svg';
import './App.css';
import './Style.css';
import  { useEffect, useState } from 'react';

function App() {
  var name = "Md. Shakil Ahmed";
  var person = {'name': 'Shakil', 'job': 'Web Developer'};
  var person2 = {name: 'Shakila', job: 'Web Developer'};
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  };

  let nayoks = ['sakib khan', 'salman khan', 'amir khan', 'sharuk khan'];


  const products = [
      {name: 'Photoshop', price: '$90.99'},
      {name: 'Illustrator', price: '$60.99'},
      {name: 'PDF Reader', price: '$6.99'},
      {name: 'Premier El', price: '$249.99'},
      {name: 'Premier Ess', price: '$259.99'},
      {name: 'Premier Eltt', price: '$289.99'},
    ];

    const ContainerStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    };


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
       
        <p>My first react pragraph</p>
        <h1>Headding line</h1>
          <DynamicUser></DynamicUser>
        <h6 style={style}>Bangladesh top doctor : {name}</h6>
        <h6>My name is : {person.name}</h6>
        <h6>My job is : {person.job}</h6>
        <p>person : {person2.name}</p>
        <p>designation : {person2.job}</p>
        <p style={style}>{person2.name + " " + person2.job}</p>

        <div style={ContainerStyle}>

          {
            products.map(pd => <Product products={pd}></Product>)
          }
        {/* <Product products={products[0]}></Product>
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        <Product products={products[3]}></Product> */}
       

        </div>

        <div style={ContainerStyle}>
        <Person title={nayoks[0]} desig="cricket player" />
        <Person title={nayoks[1]} desig="no one super stare" />
        <Person title={nayoks[2]} desig="forain man"/>
        <Person title={nayoks[3]} desig="he is a farmar"/>
        </div>

        <Counter></Counter>

       

      
      </header>
    </div>
  );
}


  function Person(props)
  {
    return <div className="PersonStyle">
          <h1 >{props.title}</h1>
          <h3>{props.desig}</h3>

    </div>
  }

  function DynamicUser() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    
    return (
      <div>
        <h1>Dynamic User Count value: {users.length}</h1>
        <div>
          <h2>Dynamic User List</h2>
          
          <ul>
           
            {
              users.map(user => <li>{user.name},{user.phone}</li>)
            }
          </ul>
         
         
        </div>
      </div>
    );
  }

  function Product(props){

    const ProductStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      height: '200px',
      width: '200px',
      margin: '10px',
      color: 'black',
    };



    const {name, price} = props.products;


    return (
    <>
    <div style={ProductStyle}>
      <h3>{name} </h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>

    </>
    );

  }

  function Counter(){
    const [count, setCount] = useState(0);
    const handaleIncrease = () => {
      setCount(count + 1);
    }

    return (
      <div>
        <h1>Count: {count}</h1>
        <button style={{ width: '80px', marginRight: '10px' }} onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button style={{ width: '80px' }} onClick={handaleIncrease}>
          Increase
        </button>
      </div>
    );
  }

export default App;
