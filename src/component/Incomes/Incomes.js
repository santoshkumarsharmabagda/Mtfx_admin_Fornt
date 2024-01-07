import React, { useEffect, useState } from 'react'
import '../../App.css'
import { apiurl } from '../../env'

const Incomes = () => {
  const [data,setdata] = useState ([])
  const dataup = async ()=>{
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch(`${localStorage.getItem('baseurl')}admin/incomes/get`, requestOptions)
        .then(response =>response.json())
        .then(result => {console.log(result)
        setdata(result.data)
        
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
   
  }
   
useEffect(()=>{
  dataup()
},[])
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-lg-12'>
    <div style={{width:'100%',padding:'10px' }}>
        <h5 className='my mx-3' style={{color:"white"}} >Incomes</h5>
    </div>
    <div className='col-lg-12'>
<div style={{ background: '#262a43', borderRadius: '10px' }}>
      {/* <input
        type="text"
        placeholder="Search.."
        name="search2"
        className="mx-5 mt-3"
        style={{ padding: '10px', borderRadius: '10px', border: 'none' }}
      /> */}
      <div className="table-responsive p-5">
        <div
          className="p-3"
          style={{
            background: '#332f59',
            borderRadius: '10px',
            height: '50vh',
            overflowY: 'scroll',
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th style={{color:"white"}} scope="col">S.no</th>
                <th style={{color:"white"}} scope="col">User Name</th>
                <th style={{color:"white"}} scope="col">Amount</th>
                <th style={{color:"white"}} scope="col">Income From</th>
                <th style={{color:"white"}} scope="col">Date/time</th>
              </tr>
            </thead>
            <tbody >
              {data?.map((res) => (
                <tr>
                  <td style={{color:"white"}} >{res.id}</td>
                  <td style={{color:"white"}} >{res.username}</td>
                  <td style={{color:"white"}} >{res.amount}</td>
                  <td style={{color:"white"}} >{res.income_from}</td> 
                  <td style={{color:"white"}} >{res.updated_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
    </div>
    </div>    
    </div>

    
  )
}

export default Incomes