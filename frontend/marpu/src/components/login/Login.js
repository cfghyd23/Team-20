import React from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux'
import { userlogin } from '../../slices/user'
import { useNavigate } from 'react-router-dom'


function Login() {
  let {users,success,ispending,isfulfilled,iserror,errormsg} = useSelector(state=>state.user)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let {register, handleSubmit, formState:{errors}} = useForm()

const onformSubmit = (dataObj)=>{
   dispatch(userlogin(dataObj))

}
if(success === true){
     alert("logined successfully")
  navigate('/userDashboard')
}
// else{
//     let err = document.getElementsByClassName("error-message")[0]
//     err.innerHTML += 
// }

return (

    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50">
      <form action="" onSubmit={handleSubmit(onformSubmit)}>
      <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label> <input type="text" placeholder='enter user name' {...register("username",{required:true})} />
        {errors.username && <p className='text-xl font-bold'> username is required</p> }
        <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label> <input type="text" placeholder='enter password' {...register("password",{required:true})} />
                <br />
                <br />
        {errors.password && <p className='text-danger'> password is required</p> }
        <button
                type="submit"
                className="bg-orange-500 text-white rounded-md px-4 py-2"
              >
                Login
              </button>
      </form>
    </div>
  )
}

export default Login