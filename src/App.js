import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Phone Book</h1>
      <form>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
        >
        </input><br></br>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
        ></input><br></br>
        <label>Phone</label>
        <input
          type='text'
          name='phone'
        >
        </input><br></br>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
