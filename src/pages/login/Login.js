import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../redux';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const {loading,loginSuccessMassage,token } =useSelector((state)=>state?.AuthSlice)
let localStoargeToken=localStorage.getItem("userToken");
// const parsedResponse = (localStoargeToken !== undefined && localStoargeToken !== null) ? JSON.parse(localStoargeToken) : null;
// let lcltk=(localStoargeToken ==undefined)?null: JSON.parse(localStoargeToken)


 let dispatch= useDispatch();
 let Navigate=useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onChange",// "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginAction(data))
  };


  useEffect(()=>{
    if(localStoargeToken){
      toast.success(loginSuccessMassage)
      setTimeout(()=>{
        Navigate("/service")
      },500)
    }

  },[token])
  return (
    <div style={{margin:"auto",width:"30%"}}>
      <form onSubmit={handleSubmit(onSubmit)} >
      <h1>Login Pages</h1>
      <input type="text" {...register("email",{ required: true })}  placeholder='Enter Email'/>
           {errors.email && <span className="err-note">Email is required</span>}<br/><br/>

      <input type="password" {...register("password",{ required: true })} placeholder='Enter password'/>
      {errors.password && <span className="err-note">Password is required</span>}<br/><br/>
      <br/>
      <button type="submit" className='btn btn-success'>{loading?<PulseLoader/>:"Login"}</button>
    </form>
    </div>
  );
}

export default Login;
