import React from 'react'
// import './Internreg.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function InternReg() {

  let navigate = useNavigate()
  const {register,handleSubmit,formState:{errors}} = useForm()

    const onFormSubmit = async(obj)=>{
        let res =await axios.post("http://localhost:3000/intern/addIntern",obj)
        let msg = res.data.message
        if(msg == "success"){
          alert("success")
        //   navigate('/login')
        }
        else{
          const er = document.getElementsByClassName("error")[0]
          er.innerHTML = `${msg}`
        }
       // console.log(message)
        // console.log(obj)
      }
  return (
    <div>
       <div>
      <form  onSubmit={handleSubmit(onFormSubmit)}   className='container mx-auto p-5'>
        <p className="error"></p>
        <div className="form-group p-3">
          <label for="username">username</label>
          <input type="text" className="form-control" id="inputUser" placeholder="username" 
          {...register("username",{required:true})} />
          {errors.username && <p className='text-danger'>*field is required</p> }
        </div>

        <p className="error"></p>
        <div className="form-group p-3">
          <label for="event">event</label>
          <input type="text" className="form-control" id="inputUser" placeholder="username" 
          {...register("event",{required:true})} />
          {errors.username && <p className='text-danger'>*field is required</p> }
        </div>
        <div className="form-group p-3">
          <label for="event">event</label>
          <input type="text" className="form-control" id="inputUser" placeholder="username" 
          {...register("event",{required:true})} />
          {errors.username && <p className='text-danger'>*field is required</p> }
        </div>
        <div className="form-group p-3">
          <label for="contact">contact</label>
          <input type="text" className="form-control" id="inputUser" placeholder="username" 
          {...register("contact",{required:true})} />
          {errors.username && <p className='text-danger'>*field is required</p> }
        </div>
        <button type="submit" className="btn btn-primary m-auto">Submit</button>
      </form> 
    </div>
    </div>
  )
}

export default InternReg