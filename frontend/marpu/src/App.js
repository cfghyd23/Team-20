import logo from './logo.svg';
import './App.css';
import {Route,Routes,Switch} from 'react-router-dom'
import Login from './components/login/Login';
import Home from './components/home/Home';
import Signup from './components/signup/Signup'
import UserDashboard from './components/UserDashboard/UserDasboard'
import Navigation from './components/Navigation/Navigation';
// import InternReg from './components/Intern/InternReg'
// import RegIntern from './components/Intern/InternReg'
import InternReg from './components/InternReg/InternReg';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
  <Navigation/>

  <Routes>
    <Route path='about' element={<About/>}/>
  <Route path='regintern' element={<InternReg/>} />
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='userDashboard' element={<UserDashboard/>} />
     
      {/* </Switch> */}
      </Routes>
    </div>
  );
}

export default App;
