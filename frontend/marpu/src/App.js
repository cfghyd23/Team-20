import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Login from './components/login/Login';
import Home from './components/home/Home';
import Signup from './components/signup/Signup'
import UserDashboard from './components/UserDashboard/UserDasboard'
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
  <Navigation/>

  <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='userDashboard' element={<UserDashboard/>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
