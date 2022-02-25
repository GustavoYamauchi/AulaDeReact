import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Descricao(){
  let [crypts, setCrypts] = React.useState(null)
  
  
  useEffect(() => {
    fetch("https://api.wazirx.com/sapi/v1/tickers/24hr")
    .then(res => res.json())
    .then(data => setCrypts(data))
  }, [])


  return (
    !crypts ? <h1>Carregando</h1> : 
    <>
      <p>{crypts[0].baseAsset}</p>
      <p>{crypts[0].openPrice}</p>
    </>
  )
}






ReactDOM.render(
    <Descricao/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
