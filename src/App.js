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

        <Person />
        <Person />
        <Person />
        <Person />
      </header>
    </div>
  );
}


function Person()
{
  return <div className="PersonStyle">
        <h1 >Sakib al hasan</h1>
        <h3>Hero of the Year</h3>

  </div>
}

export default App;
