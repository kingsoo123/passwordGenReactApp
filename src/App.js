import React, { useState } from "react";
import "./App.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {
  const [password, setPassword] = useState("password");
  const [range, setRange] = useState(14);
  const [store, setStore] = useState({upper : '', lower: '', number: null, symbols: ''});
  const [copy, setCopy] = useState(false)

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}";

  

// const copyPassword = (e)=>{

//  if(true){
//    console.log('yes');
//  }else{
//    setCopy(false)
//  }
// }

const isCopied = ()=>{
  setCopy(true)
}

  function ifCheckUppercase(e) {
    if (e.target.checked) {
      setStore({...store, upper:upperCase});
      
    }else{
   setStore({...store, upper:''})
    }
}


let inputStore = []
inputStore.push(store.upper, store.lower, store.number, store.symbols)

function getRange(e) {
  setRange(e.target.value);
}


  const ifCheckLowercase = (e)=>{
    if (e.target.checked){
      setStore({...store, lower: lowerCase})
     }else{
       setStore({...store, lower:''})
     }
}

  const ifCheckNumber = (e)=>{
    if (e.target.checked){
      setStore({...store, number: numbers})
    }else{
      setStore({...store, number:null})
    }
}

  const ifCheckSymbols = (e)=>{
    if (e.target.checked){
      setStore({...store, symbols})
    }else{
      setStore({...store, symbols:''})
    }
}

  function generatePassword() {
    let genStr = []
    let len = inputStore.join('').length;
    let generalStore = inputStore.join('').split('')
    //console.log(inputStore.join('').split(''), 'INPUT STORE');

    for (let i = 0; i < range; i++) {
      let rnumber = Math.floor(Math.random() * len);
      genStr.push(generalStore[rnumber]);
    }

    let joinStr = genStr.join("");

    setPassword(joinStr);
  }


  return (

      <div className="container wrapper d-flex justify-content-center p-4">
        <div className="content p-4" id="con">
          <div>
            <h2>Password Generator</h2>
          </div>

          <div className="form-group formDiv p-2 mt-4">
            <div className="d-flex justify-content-center">
              <p id="password" onClick={(e)=>{console.log(e.target)}}>{copy ? <mark>{password}</mark> : `${password}`}</p>
            </div>
            <div className="d-flex justify-content-end">
              <CopyToClipboard text={password} 
              onCopy={() => setCopy(true)}>
              <small style={{ cursor: "pointer" }}>Click to copy</small>
              </CopyToClipboard>
              
            </div>
          </div>

          <div className="mt-2">
            <span>
              <small>LENGTH: </small>
              <small>{range}</small>
            </span>
          </div>
          <div className="mt-2 formDiv p-4">
            <input type="range" min="4" max="32" onChange={getRange} />
          </div>

          <div className="mt-2">
            <span>
              <small>SETTINGS</small>
            </span>
          </div>

          <div className="mt-2 formDiv pt-4 p-2 d-flex justify-content-between">
            <p>Include Uppercase</p>
            <label className="switch">
              <input type="checkbox" unchecked = "true" onChange={ifCheckUppercase} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="mt-2 formDiv pt-4 p-2 d-flex justify-content-between">
            <p>Include Lowercase</p>

            <label className="switch">
              <input type="checkbox" unchecked = "true" onChange={ifCheckLowercase} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="mt-2 formDiv pt-3 p-2 d-flex justify-content-between">
            <p>Include Numbers</p>
            <label className="switch">
              <input type="checkbox" unchecked = "true" onChange={ifCheckNumber} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="mt-2 formDiv pt-3 p-2 d-flex justify-content-between">
            <p>Include Symbols</p>

            <label className="switch">
              <input type="checkbox" unchecked = "true" onChange={ifCheckSymbols} />
              <span className="slider round"></span>
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg mt-4 subBut"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
      </div>

  );
}

export default App
