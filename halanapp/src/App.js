//import logo from './logo.svg';
import {jsPDF} from "jspdf";
import "jspdf-autotable";
import './App.css';
import React, { }  from 'react';
import JsonDataDisplay from './UITable/halantable';
const doc = new jsPDF();
doc.autoTable({ html: '#halantable' })
doc.save('table.pdf')
function App() {
return (
	<div className="App">
	<h1>Hello Halan !!!</h1>
	<JsonDataDisplay/>

	</div>
);
}


export default App;

  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
//}

//export default App;
