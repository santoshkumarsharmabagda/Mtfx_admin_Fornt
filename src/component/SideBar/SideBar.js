import React from 'react'
import "./SideBar.css"
import logo from "../../Img/logo.png"
import { FaHome,FaUsers } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { BiTransfer } from "react-icons/bi";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { FaBitcoin } from "react-icons/fa";

function SideBar() {
  const Navigate = useNavigate()
  const locason = useLocation()
  const sty = locason.pathname == "/home" ?{backgroundColor:"blue"} : {backgroundColor:"#857cc2"}
  const sty2 =  locason.pathname == "/plans" ? {backgroundColor:"blue"} :{backgroundColor:"#857cc2"}
  const sty5 =  locason.pathname == "/MoneyTransfer" ? {backgroundColor:"blue"} :{backgroundColor:"#857cc2"}
  const sty6 =  locason.pathname == "/Users" ? {backgroundColor:"blue"} :{backgroundColor:"#857cc2"}
  const sty7 =  locason.pathname == "/Funds" ? {backgroundColor:"blue"} :{backgroundColor:"#857cc2"}
  const sty8 =  locason.pathname == "/Incomes" ? {backgroundColor:"blue"} :{backgroundColor:"#857cc2"}
  const sty3 = locason.pathname == "/home" ?{color:"white"} : null
  const sty4 =  locason.pathname == "/plans" ? {color:"white"} :null

  const logOut = async()=>{
    localStorage.clear()
    Navigate("/")
  }
  return (
    <div className='bg pb-1'  >

    <div className='container pt-3'>
        <div className='row'>
            <div className='col-lg-12 col-sm-12'>
            <div class="d-flex flex-column flex-shrink-0  bg-warning"  /> 
      {/* <h1 className='sa' >MTFX</h1> */}
      <img src={logo} alt="" style={{height:"40px",width:"150px"}} />
  
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto " style={{height:'76vh', }}>
      
      <li className=' ps-2 pt-2 ' style={{textDecoration:"none",listStyle:"none",borderRadius:"10px",...sty}} >
        <NavLink to="/home" class="nav-link link-dark" style={{textDecoration:"none",color:"white",display:"flex",alignItems:"center",...sty3}}>
        <p><FaHome size={27} />
</p>
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
          <p className='ms-2' >Dashboard</p>
        </NavLink>
      </li>
      <li className='mt-2 ps-2 pt-2 ' style={{textDecoration:"none",listStyle:"none",borderRadius:"10px",...sty2}}>
        <NavLink to="/plans" class="nav-link link-dark" style={{textDecoration:"none",color:"white",display:"flex",alignItems:"center",...sty4}}>
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
          <p><SiTask size={27} /></p>
          <p className='ms-2' >Plans</p>
        </NavLink>
      </li>
      <li className='mt-2 ps-2 pt-2 ' style={{textDecoration:"none",listStyle:"none",borderRadius:"10px",...sty5}}>
        <NavLink to="/MoneyTransfer" class="nav-link link-dark" style={{textDecoration:"none",color:"white",display:"flex",alignItems:"center",...sty4}}>
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
          <p><BiTransfer size={27} /></p>
          <p className='ms-2' >Transactions</p>
        </NavLink>
      </li>


      <li className='mt-2 ps-2 pt-2 ' style={{textDecoration:"none",listStyle:"none",borderRadius:"10px",...sty6}}>
        <NavLink to="/Users" class="nav-link link-dark" style={{textDecoration:"none",color:"white",display:"flex",alignItems:"center",...sty4}}>
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
          <p><FaUsers size={27} /></p>
          <p className='ms-2' >Users</p>
        </NavLink>
      </li>
      <li className='mt-2 ps-2 pt-2 ' style={{textDecoration:"none",listStyle:"none",borderRadius:"10px",...sty8}}>
        <NavLink to="/Incomes" class="nav-link link-dark" style={{textDecoration:"none",color:"white",display:"flex",alignItems:"center",...sty4}}>
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
           <p><FaBitcoin size={27} /></p>
          <p className='ms-2' >Incomes</p>
        </NavLink>
      </li>
      <li className='mt-2 ps-2 pt-2 ' style={{textDecoration:"none",listStyle:"none",borderRadius:"10px",...sty7}}>
        <NavLink to="/Funds" class="nav-link link-dark" style={{textDecoration:"none",color:"white",display:"flex",alignItems:"center",...sty4}}>
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
          <p><AiOutlineFundProjectionScreen size={27} /></p>
          <p className='ms-2' >Fund Transfer</p>
        </NavLink>
      </li>
    </ul>
    <hr/>
    {/* <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div> */}
<button className='btn btn-primary' style={{width:"100%",color:"white",backgroundColor:"#1066DF"}} onClick={logOut} >Log Out </button>
    
            </div>
        </div>
    </div>
     
  </div>
  )
}

export default SideBar
