import Drink from "../components/Drink"
import Calories from "../components/Calories"
import {  signOut } from "firebase/auth";
import {auth} from '../components/firebase';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

function Home({sendState, products})
{
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }
  return (
    <div>
      {products.map((product) => (
        <Drink
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          desc={product.desc}
          imagee={product.imagee}
          sendState={sendState}
        />
      ))}
      <Calories />
      <nav>
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
     </div>
  )
} 


export default Home