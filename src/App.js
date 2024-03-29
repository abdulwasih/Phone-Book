import { useState } from 'react';
import './App.css';

function App() {
  const initialState={
    firstName:'',
    lastName:'',
    phone:''
  }
  const [phonebook,setPhonebook] = useState(initialState)
  
  const [phoneList, setPhoneList] = useState([])
  //styling
  const tableStyle =  {
    margin: 'auto',
    width: '50%',
    padding: '10px'
}

  const handleSubmit=(event)=>{
    event.preventDefault()
    setPhoneList([...phoneList,phonebook])
  }

  const sortedContactList = [...phoneList].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  const handleChange=(event)=>{
    console.log(event.target)
    const { name, value } = event.target;
    setPhonebook({...phonebook,[name]: value });
    console.log(phonebook)
  }

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value={phonebook.firstName}
          onChange={handleChange}
        >
        </input><br></br>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={phonebook.lastName}
          onChange={handleChange}
x        ></input><br></br>
        <label>Phone</label>
        <input
          type='number'
          name='phone'
          value={phonebook.phone}
          onChange={handleChange}
        >
        </input><br></br>
        <button type='submit'>Submit</button>
      </form>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        {sortedContactList.map((item,index)=>(
          <tr key={index} >
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.phone}</td>
          </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
}

export default App;
