import React, { useEffect, useState } from 'react'
import '../../App.css'
// import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

// import lottieJson from './my-lottie.json'


const MoneyTransfer = () => {

    const [DataGet, setDataGet] = useState([]);


    const Transitions = () =>{
        var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${localStorage.getItem('baseurl')}admin/get/transaction`, requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status==1){
        setDataGet(result.data)
    }
  })
  .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        Transitions();
    },[])
  return (
    <>
     <div className='container mt-5'>
        <div className='row'>
            <div className='col-lg-11 col-sm-12 m-auto'>


<div style={{height:'80vh', overflowY:'scroll'}}>
            <table class="table">
  <thead>
    <tr>
      <th scope="col" style={{color:"white"}} >Sr.n</th>
      <th scope="col" style={{color:"white"}}>transaction_id</th>
      <th scope="col" style={{color:"white"}} >transaction_type</th>
      <th scope="col" style={{color:"white"}} >amount</th>
      <th scope="col" style={{color:"white"}} >crypto_amount</th>
      <th scope="col" style={{color:"white"}} >status</th>
    </tr>
  </thead>
  <tbody>
    {
        DataGet.map((res,index)=>{
             return(
                <>
                

            <tr>
                <th style={{color:"white"}} >{index+1}</th>
                <th style={{color:"white"}}>{res.transaction_id}</th>
                <td style={{color:"white"}}>{res.transaction_type}</td>
                <td style={{color:"white"}}>{res.amount}</td>
                <td style={{color:"white"}}>{res.crypto_amount}</td>
                <td style={{color:"white"}}>{res.status}</td>
                </tr>

               </>
             )
        })
    }
  
   
  </tbody>
</table>
</div>
            </div>
        </div>
     </div>
    </>
  )
}

export default MoneyTransfer