import React, { useEffect, useState } from 'react'
import '../../App.css'
import { ToastContainer, toast } from 'react-toastify'
import p from '../../Img/Animation - 1704521004054 (1).json'
import p2 from '../../Img/Animation - 1704520548418.json'
import Lottie from "lottie-react";


function Home() {
 
const [Data, setData] = useState('')
const [Data2, setData2] = useState('')
const [Data3, setData3] = useState('')


  const GetData = () =>{
    var myHeaders = new Headers();
myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${localStorage.getItem('baseurl')}admin/dashboard`, requestOptions)
  .then(response => response.json())
  .then(result =>  {
    if(result.status == 1){
      setData(result.totalUsers) 
      setData2(result.transactionCount.total) 
      setData3(result.fundWalletAmount) 
    }
  })
  .catch(error => console.log('error', error));
  }




  

  useEffect(()=>{
    GetData();
  },[])
  return (
    <>
      <ToastContainer/>

     
      <div className='container mt-5'>
        <div className='row'>
            
            
            <div className='col-lg-10 m-auto'>
              <div className='row'>

                       

          <div className='col-lg-4 col-md-6 col-sm-12'>

            <div className='card mt-3  Santosh'>
              <div className='card-body text-center'>
                <h4>Total User</h4>
                <h4 className='mt-3'>{Data}</h4>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>

            <div className='card mt-3 Santosh'>
              <div className='card-body text-center'>
              <h4>Total Transactions</h4>
                <h4 className='mt-3'>{Data2}</h4>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>

            <div className='card mt-3 Santosh'>
              <div className='card-body text-center'>
              <h4>Total Full Wallet Balance</h4>
                <h4 className='mt-3'>$ {Data3}</h4>
              </div>
            </div>
            </div>
            </div>
          </div>
         <div style={{display:"flex"}} >
         <div className='container mt-3' >
         <Lottie style={{width:"",height:"60vh"}}
                    className="Lottie w-40" // Add the class name here
                    animationData={p2} // replace with your animation data
                    loop
                    autoplay
                  />
         </div>
         <div className='container mt-3' >
         <Lottie style={{width:"",height:"60vh"}}
                    className="Lottie w-40" // Add the class name here
                    animationData={p} // replace with your animation data
                    loop
                    autoplay
                  />
         </div>
         </div>
        </div>
      </div>

 



     
    </>
  )
}

export default Home
