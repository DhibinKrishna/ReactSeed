import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const send = async () => {
    let result = await axios.get('api/meta');
    console.log(result);
  }

  return (
    <div className="App">
      <input type="button" value="Send" onClick={send} />
    </div>
  );
}

export default App;
