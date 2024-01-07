import React, { useEffect, useState } from 'react'
import fund from '../../Img/fund.jpg'
import { ToastContainer, toast } from 'react-toastify'
function Funds() {
const [data, setdata] = useState([])
const [page, setpage] = useState(1)
const [username, setusername] = useState()
const [Amount, setAmount] = useState()
    const api = async() =>{
try {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

var raw = JSON.stringify({
  "page": page
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${localStorage.getItem('baseurl')}admin/user/page`, requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)

if (result.status == 1) {
    setdata(result.data)
}

})
  .catch(error => console.log('error', error));
} catch (error) {
    console.log(error);
}
    }


const fundsend = async () =>{
    try {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

var raw = JSON.stringify({
  "username": username,
  "fund_wallet": Amount
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${localStorage.getItem('baseurl')}admin/fund/add`, requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
if (result.status == 1) {

    api()
    toast(result.message);
}

})
  .catch(error => console.log('error', error));
    } catch (error) {
        console.log(error);
    }
}

    useEffect(()=>{
      
        api()
    },[page])
    
    
  return (
    <div>
     <ToastContainer/>
      <div style={{height:'80vh', overflowY:'scroll'}}>
            <table class="table">
  <thead style={{border:'1px solid gray'}}>
    <tr>
      <th scope="col" style={{color:"white"}} >Sr.N</th>
      <th scope="col" style={{color:"white"}}> Name</th>
      <th scope="col" style={{color:"white"}}>Email</th>
      <th scope="col" style={{color:"white"}} >User Name</th>
      <th scope="col" style={{color:"white"}}>Fund Wallet</th>
      <th scope="col" style={{color:"white"}}>Fund</th>
    </tr>
  </thead>
  <tbody >
    

    {
        data?.map((res, index)=>{
            return(
                <tr>
                <th scope="row" style={{color:"white"}} >{res.id}</th>
                <td style={{color:"white"}}>{res.name}</td>
                <td style={{color:"white"}} >{res.email}</td>
                <td style={{color:"white"}}><div>{res.username}</div></td>
                <td style={{color:"white"}}><div>{res.fund_wallet}</div></td>
                <td><div>

               
                        <button style={{ backgroundColor: 'white', padding: '4px 30px', color: '#000', borderRadius: '8px', border: 'none' }} onClick={()=>{setusername(res.username)}}  data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"  >
                            Add Funds
                        </button>
                    
                   
                 
                   
                    </div></td>
              </tr>
              
            )
        })
    }
    
   
   
  </tbody>
</table>

            </div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
    <div>
        <button className='btn' style={{backgroundColor:"#000",color:"white"}}  onClick={()=>{setpage(page-1)}} >Back</button>
    </div>
    <div>
    <button className='btn ms-4 ' style={{backgroundColor:"#000",color:"white"}}  onClick={()=>{setpage(page+1)}} >Next</button>
    </div>
</div>


<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Send fund</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    <input class="form-control form-control-lg" type="text" placeholder="User Name" value={username} aria-label=".form-control-lg example" onChange={(e)=>{setusername(e.target.value)}} />

    </div>
    <div className='mt-3' >
    <input class="form-control form-control-lg" type="text" placeholder="Amount" aria-label=".form-control-lg example" value={Amount} onChange={(e)=>{setAmount(e.target.value)}} />

    </div>
    <div className='mt-3' >
   <button style={{width:"100%", backgroundColor:"#B2CED1", fontSize:"20px" }} className='btn btn-primary' onClick={fundsend} >Send</button>
    </div>

    <div>
        <img src={fund} style={{height:"100%",width:"100%"}} />
    </div>
  </div>
</div>
    </div>
  )
}

export default Funds