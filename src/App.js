import { useState } from 'react';
import './App.css';

function App() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [phone,setPhone] = useState('')
  //styling
  const tableStyle =  {
    margin: 'auto',
    width: '50%',
    padding: '10px'
}
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(firstName,lastName,phone)
  }

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={(event)=>setFirstName(event.target.value)}
        >
        </input><br></br>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={(event)=>setLastName(event.target.value)}
x        ></input><br></br>
        <label>Phone</label>
        <input
          type='number'
          name='phone'
          value={phone}
          onChange={(event)=>setPhone(event.target.value)}
        >
        </input><br></br>
        <button type='submit'>Submit</button>
      </form>
      <table style={tableStyle}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </table>
        <tr>
          
        </tr>
    </div>
  );
}

export default App;
