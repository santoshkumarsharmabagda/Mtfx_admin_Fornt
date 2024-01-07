import React, { useEffect, useState } from 'react'
import '../../App.css'
import { ToastContainer, toast } from 'react-toastify';

const Users = () => {
 

    const [UserData2, setUserData2] = useState([]);

const [userid, setuserid] = useState()
const [activeuser, setactiveuser] = useState()

    const UserData = () =>{
        var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${localStorage.getItem('baseurl')}admin/get/user/data`, requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status == 1){
        setUserData2(result.data)
    }else{

    }
  })
  .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        UserData()
    },[])

    const active2 = async (i) =>{
      try {
          var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
  
  var raw = JSON.stringify({
    "userId": userid,
    "active": i
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch(`${localStorage.getItem('baseurl')}admin/active`, requestOptions)
  .then(response => response.json())
    .then(result => {console.log(result)
  if (result.status == 1) {
    UserData()
     
      toast(result.msg);
  }
  
  })
    .catch(error => console.log('error', error));
      } catch (error) {
          console.log(error);
      }
  }
  
     
  return (
    <>
    <ToastContainer/>
     <div className='container mt-5'>
        <div className='row'>
            <div className='col-lg-11 col-sm-12  m-auto'>


<div style={{height:'80vh', overflowY:'scroll'}}>
            <table class="table">
  <thead style={{border:'1px solid gray'}}>
    <tr>
      <th scope="col" style={{color:"white"}} >Sr.N</th>
      <th scope="col" style={{color:"white"}} > Name</th>
      <th scope="col" style={{color:"white"}} >Email</th>
      <th scope="col" style={{color:"white"}} >User Name</th>
      <th scope="col" style={{color:"white"}} >Status</th>
    </tr>
  </thead>
  <tbody >
    

    {
        UserData2?.map((res, index)=>{
            return(
                <tr>
                <th style={{color:"white"}} scope="row">{index+1}</th>
                <td style={{color:"white"}}>{res.name}</td>
                <td style={{color:"white"}}>{res.email}</td>
                <td style={{color:"white"}}><div>{res.username}</div></td>
                <td><div>

                {
                    res.active === 1 ? (
                        <>
                        <button style={{ backgroundColor: 'white', padding: '4px 30px', color: '#000', borderRadius: '8px', border: 'none' }} onClick={()=>{setuserid(res.id);setactiveuser(res.active)}}  data-bs-toggle="modal" data-bs-target="#exampleModal"  >
                            Active
                        </button>
                        </>
                    ) : (
                        <button style={{ backgroundColor: 'black', padding: '4px 30px', color: 'white', borderRadius: '8px', border: 'none' }} onClick={()=>{setuserid(res.id);setactiveuser(res.active)}} data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        Inactive
                        </button>
                    )
                    }
                   
                    </div></td>
              </tr>
              
            )
        })
    }
    
  </tbody>
</table>



          </div>
            </div> 

            
               
        </div>
     </div>
     


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Status Update</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div   style={{width:"100%", backgroundColor:"", fontSize:"20px" }} >{activeuser == 1 ?<button class="btn btn-primary" onClick={()=>{active2(false)}} data-bs-dismiss="modal" aria-label="Close" >Active</button>: <button class="btn btn-secondary" onClick={()=>{active2(true)}} data-bs-dismiss="modal" aria-label="Close" >UnActive</button>}</div>
      </div>
    
    </div>
  </div>
</div>
    </>
  )
}

export default Users