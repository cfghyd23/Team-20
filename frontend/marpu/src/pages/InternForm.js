import { useForm } from 'react-hook-form';

function InternForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="w-7/12 mb-6 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email field */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email is required</span>}
        </div>

        {/* Password field */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('password', { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>

        {/* Full name field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Full name
          </label>
          <input
            type="text"
            id="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
            {...register('fullname', { required: true })}
          />
          {errors.fullname && <span>Full name is required</span>}
        </div>

        {/* Gender field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
          <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('age', { required: true })}
          />
          {errors.age && <span>Age is required</span>}
        </div>

        {/* Address field */}
        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Address
          </label>
          <textarea
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('address', { required: true })}
          />
          {errors.address && <span>Address is required</span>}
        </div>

        {/* Phone number field */}
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>Phone number is required</span>}
        </div>

         {/* State field */}
         <div className="mb-6">
          <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            State
          </label>
          <input
            type="text"
            id="state"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('state', { required: true })}
          />
          {errors.state && <span>State is required</span>}
        </div>

        {/* City field */}
        <div className="mb-6">
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('city', { required: true })}
          />
          {errors.city && <span>City is required</span>}
        </div>

        {/* Address field */}
        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('address', { required: true })}
          />
          {errors.address && <span>Address is required</span>}
        </div>

        {/* Current College/School/University field */}
        <div className="mb-6">
          <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Current College/School/University
          </label>
          <input
            type="text"
            id="college"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('college', { required: true })}
          />
          {errors.college && <span>College/School/University is required</span>}
        </div>

        {/* Education field */}
        <div className="mb-6">
          <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Education
          </label>
          <input
            type="text"
            id="education"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register('education', { required: true })}
          />
          {errors.education && <span>Education is required</span>}
        </div>

        {/* Internship Type field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Internship Type
          </label>
          <input type="radio" id="inPerson" name="internshipType" value="inPerson" {...register('internshipType')} />
          <label htmlFor="inPerson">In-Person</label>
          <br />
          <input type="radio" id="virtual" name="internshipType" value="virtual" {...register('internshipType')} />
          <label htmlFor="virtual">Virtual</label>
          <br />
        </div>

        {/* Internship Role field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Internship Role
          </label>
          <input type="radio" id="fundraiser" name="internshipRole" value="fundraiser" {...register('internshipRole')} />
          <label htmlFor="fundraiser">FundRaiser Intern</label>
          <br />
        </div>

        {/* Your Introduction field */}
        <div className="mb-6">
          <label htmlFor="introduction" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Introduction
          </label>
          <input
            type="text"
            id="introduction"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tell us something about you"
            required
            {...register('introduction', { required: true })}
          />
          {errors.introduction && <span>Introduction is required</span>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InternForm;
