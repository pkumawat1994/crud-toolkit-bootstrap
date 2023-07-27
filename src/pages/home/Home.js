import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAction, GetListAction } from '../../redux';
import { PulseLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const{ loading,userList }= useSelector((state)=>state?.UserSlice)
    let dispatch=useDispatch();
    let navigate=useNavigate();

    useEffect(()=>{ 
        dispatch(GetListAction()) 
    },[])

    // delete handle-----
    const deleteHandle=(id)=>{
        dispatch(DeleteAction(id))
           dispatch(GetListAction())
    }

    // Edit User------------------
    const editHandle=(obj)=>{
        console.log("obbbjjjj",obj)
        navigate("/register",{state:{obj}})
    }

  return (
    <div>
      <h1>Home components</h1>


      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">city</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  
   
    
<tbody>
      {loading?<PulseLoader/>:userList && userList.length>0? userList.map((list)=>{
        return(<>
        <tr>
      <th scope="row">{list.id}</th>
      <td>{list.name}</td>
      <td>{list.email}</td>
      <td>{list.city}</td>
      <td><button className='btn btn-danger' onClick={()=>deleteHandle(list.id)}>Delete</button><button className="btn btn-success ml-2" onClick={()=>editHandle(list)}>Edit</button></td>
    </tr>
        </>)
      })  :"No Data"}
      </tbody>
      </table>
    </div>
  );
}

export default Home;
