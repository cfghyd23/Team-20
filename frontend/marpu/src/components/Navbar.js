import { Link, Outlet } from "react-router-dom"

function Navbar()
{
  return (
    <div>
  <nav className="bg-gray-800">
    <ul className="flex justify-between items-center py-4 px-8">
      <li className="w-48">
        <Link to="/" className="text-white text-xl w-48 font-semibold">
          Home
        </Link>
      </li>
      <li>
        <h1 className="text-white text-2xl font-bold font-serif">THE COFFTEA SHOP</h1>
      </li>
      <li className="w-48">
      <Link
          to="/login"
          className="text-white hover:text-gray-300 ml-4 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-white hover:text-gray-300 ml-4 transition duration-300"
        >
          SignUp
        </Link>
        <Link
          to="/cart"
          className="text-white hover:text-gray-300 ml-4 transition duration-300"
        >
          Cart
        </Link>
      </li>
    </ul>
  </nav>
  <Outlet />
</div>

  
);
}

export default Navbar