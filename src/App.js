import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import './App.css';

import Snack from './Snack.js'


// import VendingMachine from './VendingMachine'

function App() {
  const snacks = ["snickers", "twix", "kit kat"]
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Hello, I am a vending machine!</h1>
         { snacks.map(snack => <NavLink className="NavLink" to={snack} key={snack}>{snack}</NavLink>)}
       <Routes>
         <Route exact path="/snickers" element={<Snack name="snickers" />}/>
         <Route exact path="/twix" element={<Snack name="twix" />} />
         <Route exact path="/kitkat" element={<Snack name="kit kat" />} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App;
