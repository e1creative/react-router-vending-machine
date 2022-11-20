import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import Snack from './Snack'

import './VendingMachine.css'

const VendingMachine = () => {
    const snacks = ["snickers", "twix", "kitkat"]
    return (
        <BrowserRouter>
            <h1>Hello, I am a vending machine!</h1>
            { snacks.map(snack => <NavLink exact className="NavLink" to={snack} key={snack}>{snack}</NavLink>)}
            <Routes>
            <Route exact path="/snickers" element={<Snack name="snickers" />}/>
            <Route exact path="/twix" element={<Snack name="twix" />} />
            <Route exact path="/kitkat" element={<Snack name="kitkat" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default VendingMachine;