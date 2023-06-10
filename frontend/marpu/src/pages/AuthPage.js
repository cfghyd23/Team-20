import React, { useState, useEffect } from 'react';
import { auth } from '../components/firebase';
import Order from './Order';
function AuthPage()
{
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? (
        <h1><Order /></h1>
        // Render the content for signed-in users
      ) : (
        <h1>Please login to access this page.</h1>
        // Render the login prompt for non-signed-in users
      )}
    </div>
  );
}
export default AuthPage