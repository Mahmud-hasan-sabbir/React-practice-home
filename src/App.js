import logo from './logo.svg';
import './App.css';
import './Style.css';

function App() {
  var name = "Md. Shakil Ahmed";
  var person = {'name': 'Shakil', 'job': 'Web Developer'};
  var person2 = {name: 'Shakila', job: 'Web Developer'};
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  };

  let nayoks = ['sakib khan', 'salman khan', 'amir khan', 'sharuk khan'];
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first react pragraph</p>
        <h1>Headding line</h1>
        <p>{(5+5) - 3}</p>
        <h6 style={style}>Bangladesh top doctor : {name}</h6>
        <h6>My name is : {person.name}</h6>
        <h6>My job is : {person.job}</h6>
        <p>person : {person2.name}</p>
        <p>designation : {person2.job}</p>
        <p style={style}>{person2.name + " " + person2.job}</p>

        <Person title={nayoks[0]} desig="cricket player" />
        <Person title={nayoks[1]} desig="no one super stare" />
        <Person title={nayoks[2]} desig="forain man"/>
        <Person title={nayoks[3]} desig="he is a farmar"/>
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

export default App;
