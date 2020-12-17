import React, { useEffect, useState } from "react";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const ShowUppercase = (props) => {

  const {setUpper} = props

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <>
      <div
        className="mt-2 formDiv pt-4 p-2 d-flex justify-content-between"
      >
        <p>Include Uppercase</p>
        <label className="switch">
          <input
            type="checkbox"
            unchecked="true"
            onChange={(e)=>{e.target.checked ? setUpper(prev =>(upperCase)) : setUpper(prev => (''))}}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};



export const ShowLowercase = (props) => {
 const {setLower} = props
 const lowerCase = "abcdefghijklmnopqrstuvwxyz";

  return (
    <>
      <div
        className="mt-2 formDiv pt-4 p-2 d-flex justify-content-between"
      >
        <p>Include Uppercase</p>
        <label className="switch">
          <input
            type="checkbox"
            unchecked="true"
           onChange= {(e)=>{e.target.checked ? setLower(prev =>(lowerCase)) : setLower(prev => (''))}}
          />
          <span className="slider round"></span>
        </label>
      </div>
    
    </>
  );
};



export const ShowNumber = (props) => {
  const {setNumber} = props
  const numbers = "0123456789";

  return (
    <>
      <div
        className="mt-2 formDiv pt-4 p-2 d-flex justify-content-between"
      >
        <p>Include Number</p>
        <label className="switch">
          <input
            type="checkbox"
            unchecked="true"
           onChange= {(e)=>{e.target.checked ? setNumber(prev =>(numbers)) : setNumber(prev => (''))}}
          />
          <span className="slider round"></span>
        </label>
      </div>
    
    </>
  );
};



export const ShowSymbols = (props) => {
  const {setSymbol} = props
  const symbols = "!@#$%^&*()_+{}";

  return (
    <>
      <div
        className="mt-2 formDiv pt-4 p-2 d-flex justify-content-between"
      >
        <p>Include Uppercase</p>
        <label className="switch">
          <input
            type="checkbox"
            unchecked="true"
            onChange = {(e)=>{e.target.checked ? setSymbol(prev =>(symbols)) : setSymbol(prev => (''))}}
          />
          <span className="slider round"></span>
        </label>
      </div>
    
    </>
  );
};







function App() {
  const [range, setRange] = useState(14);
  const [copy, setCopy] = useState(false);
  const [password, setPassword] = useState('password');
  const [upper, setUpper] = useState('')
  const [ lower, setLower] = useState('')
  const [number , setNumber] = useState('')
  const [symbol, setSymbol] = useState('')

  

console.log(upper, lower, number, symbol);

  const copied = () => {
    if (copy) setCopy(true);
    setCopy(true);
  };

  function getRange(e) {
    setRange(e.target.value);
  }

  let store = []
  store.push(upper, lower, number, symbol)

  const generatePassword =()=>{
    let random = []
    let genStr = store.join('')
    let len = genStr.length
    let newStore =  store.join('').split('')
    console.log(genStr);

    for (let i = 0; i < range; i++) {
      let rnumber = Math.floor(Math.random() * len);
      random.push(newStore[rnumber]);
    }

    let joinStr = random.join('')
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
            <p id="password">
              {copy ? <mark>{password}</mark> : `${password}`}
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <CopyToClipboard text={password} onCopy={copied}>
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
        <ShowUppercase setUpper = {setUpper}/>
        <ShowLowercase setLower={setLower}/>
        <ShowNumber setNumber={setNumber}/>
        <ShowSymbols setSymbol ={setSymbol}/>

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

export default App;
