import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiurl } from '../../env';

function Login() {
  const Navigate = useNavigate();
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const loginapi = async()=>{
    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${apiurl}/admin/login`, requestOptions)
  .then(response => response.json())
  .then(async result => {console.log(result)
  
  if (result.token) {
    await localStorage.setItem("baseurl",`${apiurl}/`)
    await localStorage.setItem("token",result.token)
     
    toast(result.msg);
    Navigate('/home');
    
  }else{
    toast(result.msg)
  }
  })
  .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }
  return (


    <div className='lm' style={{display:"flex",justifyContent:"center",alignItems:"center",width:"99vw"}} >
     

     <ToastContainer/>
    
      <div className='container mt-2 mb-2 m-0 p-0' >
      <div className="row m-0 p-0 g-0 "  >
        <div className="col-lg-6 col-sm-12 col-md-12 m-0 p-0 bgi " >
             <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
             <div> 
             <h1 style={{color:"white"}} className='wh' >Wel Come</h1>
             <h1 className='sa' style={{color:"white",textAlign:"center"}} >M T F X</h1>
             </div>

             </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="card ps-4 " style={{height:"100%",display:"flex",justifyContent:"center"}}  >
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: "90%" },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
      <h1 className='wh1 sa log' style={{textAlign:"center",fontWeight:900,lineHeight:"10vh"}} >Login</h1>
    </div>
      <div>
        <TextField
        fullWidth
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={e=>setemail(e.target.value)}
        />
        </div>
      <div>
        <TextField
        fullWidth
          required
          id="outlined-required"
          label="Passord"
          type="password"
          value={password}
          onChange={e=>setpassword(e.target.value)}
        />
        </div>
        <div className='container' >
        <Button className='btte  text-capitalize' variant="contained" style={{width:"37vw",fontSize:"1.5rem"}} onClick={loginapi} >Login</Button>

        </div>
        </Box>
            <div className='me-auto container' >
              <p className=''  >Don't have an account? <span className='sa' style={{fontSize:"1.5rem",borderBottom:"1px solid blue",cursor:"pointer"}} onClick={()=>{Navigate("/signup")}} >Forgotten Password</span> </p>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
