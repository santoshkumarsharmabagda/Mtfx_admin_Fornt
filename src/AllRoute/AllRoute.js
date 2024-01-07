import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../component/Authentication/Login'
import SignUp from '../component/Authentication/SignUp'
import Home from '../component/Home/Home'
import Plans from '../component/plans/Plans'
import MoneyTransfer from '../component/Send/MoneyTransfer'
import Users from '../component/User/Users'
import Incomes from '../component/Incomes/Incomes'
import Funds from '../component/funds/Funds'

function AllRoute() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/MoneyTransfer' element={<MoneyTransfer/>} />
        <Route path='/Users' element={<Users/>} />
        <Route path='/Incomes' element={<Incomes/>} />
        <Route path='/Funds' element={<Funds/>} />
      </Routes>
    </>
  )
}

export default AllRoute
