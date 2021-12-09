import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';

const employees = [
  {
    id: '1',
    firstName: 'Ikenna',
    lastName: 'Odoh',
    age: '20'
  },
  {
    id: '2',
    firstName: 'UG',
    lastName: 'Odoh',
    age: '18'
  },
  {
    id: '3',
    firstName: 'TC',
    lastName: 'Odoh',
    age: '16'
  },
]

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const count = useSelector((state) => state.counter.count);
  console.log(employees)
  const firstEmployee = employees[0];
  const voters = ['Amara Ekwunife', 'Chika Chikeluba', 'Ebuka Ogbodo']
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
      {
        loggedIn ? (
          <div>
            {
              <Employee key={firstEmployee.id} {...firstEmployee} />
            }
            <h1>{`Total Votes = ${count}`}</h1>
            {
              voters.map((voter) => 
                <Counter name={voter} />
              )
            }
          </div>
          
        ) : (
          <div>
            <h2>Login to continue</h2>
          </div>
          
        )
      }
      </header>
    </div>
  );
}

export default App;
