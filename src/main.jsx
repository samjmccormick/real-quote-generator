import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import './index.css'

function App() {

  let quoted = '';

  async function GetQuote() {
    try {
        const res = await fetch("https://api.kanye.rest/");
        const data = await res.json();
        console.log(data.quote);
        quoted = data.quote;
    } catch (err) {
        console.log(err);
    }
  };

  GetQuote();

console.log(quoted);

  return (
    <>
    <div>Quote</div>
   <Button variant='primary'>Quote</Button>
    </>
  )
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
