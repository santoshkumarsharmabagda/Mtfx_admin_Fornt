import React, { useEffect, useState } from 'react'
import '../../App.css'
import { ToastContainer, toast } from 'react-toastify'

function Plans() {
  const [planName, setplanName] = useState('')
  const [duration, setduration] = useState('')
  const [min_duration, setmin_duration] = useState('')
  const [desc, setdesc] = useState('')
  const [monthly_return, setmonthly_return] = useState('')
  const [total_return, settotal_return] = useState('')
  const [Data, setData] = useState([])

  const CreatePlan = () =>{   
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('token')}`);


var raw = JSON.stringify({
  "planName": planName,
  "duration": duration,
  "min_duration": min_duration,
  "desc": desc,
  "monthly_return": monthly_return,
  "total_return": total_return
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${localStorage.getItem('baseurl')}admin/plans/create`, requestOptions)
  .then(response => response.json())
  .then(result =>{
    if(result.status == 1){
      toast(result.msg)
      GetData();
    }else{
      toast(result.msg)
    }
  })
  .catch(error => console.log('error', error));
  }

  const GetData = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${localStorage.getItem('baseurl')}admin/all/plans/get`, requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status == 1){
  setData(result.formattedData);
  
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
          <div className='col-lg-10'>
          <div style={{display:'flex', justifyContent:'right'}}>
              {/* <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' style={{backgroundColor:'#000', color:'#fff', borderRadius:'8px', padding:'8px 25px', fontWeight:'600'}}>Create Plan</button> */}
            </div>
          </div>
        </div>
      </div>
    <div className='container '>  
      <div className='row'>
        <div className='col-lg-11 col-md-11 col-sm-12 m-auto'>
        <table class="table table-striped p-4 "  >
  <thead style={{border:'1px solid #FFF',  }}> 
    <tr >
      <th scope="col" style={{color:"white"}} >Sr.N</th>
      <th scope="col" style={{color:"white"}} >Plan Name</th>
      <th scope="col" style={{color:"white"}} >Duration</th>
      <th scope="col" style={{color:"white"}} >Min_Duration</th>
      <th scope="col" style={{color:"white"}} >Desc</th>
      <th scope="col" style={{color:"white"}} >Date</th>
    </tr> 
  </thead>
  <tbody   style={{height:'6vh', overflowY:'scroll'}}>

    {
      Data?.map((res,index)=>{
        return(
          <tr >
          <th scope="row" style={{color:"white"}}>{index+1}</th>
          <td style={{color:"white"}} >{res["plan-name"]}</td>
          <td style={{color:"white"}}>{res.duration}</td>
          <td style={{color:"white"}}>{res.min_duration}</td>
          <td style={{color:"white"}}>{res.desc}</td>
          <td style={{color:"white"}}>{res.created_at}</td>
        </tr>
        )
      })
    }
   
  </tbody>
</table>
        </div>
      </div>
    </div>

     {/* <!-- Button trigger modal --> */}
 

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backdropFilter:'blur(8px)'}}>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">planName  </label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder='Plan Name' 
    onChange={(e)=>{setplanName(e.target.value)}}/> 
  </div>

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">duration  </label>
    <input type="number" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder='duration'  onChange={(e)=>{setduration(e.target.value)}}/> 
  </div>

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">min_duration  </label>
    <input type="number" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder='min_duration'  onChange={(e)=>{setmin_duration(e.target.value)}}/> 
  </div>

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">desc  </label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder='desc' style={{color:"white"}}   onChange={(e)=>{setdesc(e.target.value)}}/> 
  </div>

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">monthly_return  </label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder='monthly_return'  onChange={(e)=>{setmonthly_return(e.target.value)}}/> 
  </div>

      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">total_return </label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder='total_return'  onChange={(e)=>{settotal_return(e.target.value)}}/> 
  </div>



  <div  style={{display:'flex', justifyContent:'center'}} onClick={()=>{CreatePlan()}}>
                <button class="custom-btn btn-9"   data-bs-dismiss="modal" aria-label="Close" >Create Plan</button></div>

                    



      </div> 
    </div>
  </div>
</div>
      
    </>
  )
}

export default Plans
