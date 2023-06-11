import { useForm } from 'react-hook-form';
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

let navigate = useNavigate()
const {register,handleSubmit,formState:{errors}} = useForm()

const onFormSubmit = async(obj)=>{
  let res =await axios.post("http://localhost:3000/user/createuser",obj)
  let msg = res.data.message
  if(msg == "success"){
    alert("success")
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
      <form  onSubmit={handleSubmit(onFormSubmit)}   className='container mx-auto p-5'>
        <p className="error"></p>
        <div >
          <label for="username" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black mt-6">Username</label>
          <input type="text" id="inputUser" placeholder="username" className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            
            
          {...register("username",{required:true})} />
          {errors.username && <p className='text-danger'>*field is required</p> }
        </div>

        <div >
          <label htmlFor="exampleInputEmail1" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black mt-6">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
           {...register("email",{required:true})} />
           {errors.email && <p className='text-danger'>*field is required</p> }
        </div>

        <div >
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" 
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
             placeholder="Password"
           {...register("password",{required:true})} />
           {errors.password && <p className='text-danger'>*field is required</p> }
        </div>

        {/* Full name field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Full name
          </label>
          <input
            type="text"
            id="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
            {...register('fullname', { required: true })}
          />
          {errors.fullname && <span>Full name is required</span>}
        </div>

        {/* Gender field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Gender
          </label>
          <input type="radio" id="male" name="gender" value="male" {...register('gender')} />
          <label htmlFor="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" {...register('gender')} />
          <label htmlFor="female">Female</label>
          <br />
          <input type="radio" id="other" name="gender" value="other" {...register('gender')} />
          <label htmlFor="other">Other</label>
          <br />
          <input type="radio" id="prefer-not-say" name="gender" value="prefer-not-say" {...register('gender')} />
          <label htmlFor="prefer-not-say">Prefer not to say</label>
          <br />
        </div>

        {/* Age field */}
        <div className="mb-6">
          <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('age', { required: true })}
          />
          {errors.age && <span>Age is required</span>}
        </div>

        {/* Address field */}
        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Address
          </label>
          <textarea
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('address', { required: true })}
          />
          {errors.address && <span>Address is required</span>}
        </div>

        {/* Phone number field */}
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>Phone number is required</span>}
        </div>

         {/* State field */}
         <div className="mb-6">
          <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            State
          </label>
          <input
            type="text"
            id="state"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('state', { required: true })}
          />
          {errors.state && <span>State is required</span>}
        </div>

        {/* City field */}
        <div className="mb-6">
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('city', { required: true })}
          />
          {errors.city && <span>City is required</span>}
        </div>

        {/* Address field */}
        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('address', { required: true })}
          />
          {errors.address && <span>Address is required</span>}
        </div>

        {/* Current College/School/University field */}
        <div className="mb-6">
          <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Current College/School/University
          </label>
          <input
            type="text"
            id="college"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('college', { required: true })}
          />
          {errors.college && <span>College/School/University is required</span>}
        </div>

        {/* Education field */}
        <div className="mb-6">
          <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Education
          </label>
          <input
            type="text"
            id="education"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            required
            {...register('education', { required: true })}
          />
          {errors.education && <span>Education is required</span>}
        </div>

   
        {/* Event field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Gender
          </label>
          <input type="radio" id="male" name="gender" value="water saving" {...register('gender')} />
          <label htmlFor="male">Save Water</label>
          <br />
          <input type="radio" id="female" name="gender" value="Save Air" {...register('gender')} />
          <label htmlFor="female">Save Air</label>
          <br />
          <input type="radio" id="other" name="gender" value="Child Labour" {...register('gender')} />
          <label htmlFor="other">Child Labour</label>
          <br />
          <input type="radio" id="prefer-not-say" name="gender" value="Dont Know" {...register('gender')} />
          <label htmlFor="prefer-not-say">Dont know</label>
          <br />
        </div>
        {/* Your Introduction field */}
        <div className="mb-6">
          <label htmlFor="introduction" className="block mb-2 text-sm font-medium text-gray-400 dark:text-black">
            Your Introduction
          </label>
          <input
            type="text"
            id="introduction"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:text-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:text-gray-400 dark:focus:border-blue-500"
            placeholder="Tell us something about you"
            required
            {...register('introduction', { required: true })}
          />
          {errors.introduction && <span>Introduction is required</span>}
        </div>
        <button type="submit" className="btn btn-primary m-auto">Submit</button>
        
      </form> 
    </div>
  )
}

export default Signup
