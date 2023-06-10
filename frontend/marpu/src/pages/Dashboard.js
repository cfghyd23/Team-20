import DashboardNav from '../components/DashboardNav'
import Money from '../components/Money'
import Login from './Login';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Orientation from '../components/Orientation';
import Admin from './Admin';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
const moneyRaised = 5000
const moneyGet = 10000
const Dashboard = ({ userData }) => {
  function handleCertificate()
  {
    return <div>Hi</div>
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="dashboard-container bg-gradient-to-br from-orange-200 min-h-screen p-8">
  <DashboardNav />
  <h1 className="text-3xl font-bold text-center mt-10 mb-6 text-orange-800">Dashboard</h1>
  <Orientation />
  <div className="flex items-center justify-around" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <div className="bg-orange-400 text-white p-4 rounded-lg w-4/12 h-2/3">
      <h2 className="text-xl mb-4 text-center">User Data</h2>
      <p className="mb-2 bg-orange-600 text-white p-4 rounded-lg h-2/3">Name: Hi</p>
      <p className="mb-2 bg-orange-800 text-white p-4 rounded-lg h-2/3">Address: Hi</p>
      <p className="mb-2 bg-orange-600 text-white p-4 rounded-lg h-2/3">City: Hi</p>
      <p className="mb-2 bg-orange-800 text-white p-4 rounded-lg h-2/3">Name: Hi</p>
      <p className="mb-2 bg-orange-600 text-white p-4 rounded-lg h-2/3">Address: Hi</p>
      <p className="mb-2 bg-orange-800 text-white p-4 rounded-lg h-2/3">City: Hi</p>
    </div>
    <div className="bg-orange-800 text-white p-4 rounded-lg w-3/12 h-2/3" data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <h2 className="text-xl mb-4 text-center">Money Raised</h2>
      <div className="flex justify-center items-center flex-col">
        <div className='text-3xl font-bold text-center mt-10 mb-6 text-orange-400'>Total Amount to Be Raised: Rs {moneyGet}</div>
        <CircularProgressbar
        className='w-2/3 h-2/3'
          value={moneyRaised*100/moneyGet}
          text={`${moneyRaised} Rs`}
          strokeWidth={8}
          styles={buildStyles({
            textColor: '#fff',
            pathColor: '#f5a623',
            trailColor: '#d4d4d4',
          })}
        />
      </div>
      <div className='flex items-center justify-center'>
      <button
        className={`bg-orange-500 text-white px-4 py-2 rounded mt-10 text-center  ${
          moneyRaised < 10000 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleCertificate}
        disabled={moneyRaised < 10000}
      >
        Download Certificate
      </button>
      </div>
    </div>
  </div>
  <div className='bg-orange-400 mt-10 text-xl text-white p-4 py-10 rounded-lg w-11/12 mx-auto'></div>
</div>
  );
};

export default Dashboard;
