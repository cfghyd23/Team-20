import { Link } from "react-router-dom";

function Cart({ cartElements, products }) {
  const map = new Map(cartElements);
  console.log(map);
  const drinkElements = [];
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    if (map.get(products[i].id) !== undefined) {
      drinkElements.push(
        <div className="flex flex-row w-3/3 h-1/5 bg-gray-900 justify-between mx-10 items-start mt-2">
          <div>
          <p className="text-xl">{products[i].name}</p>
          <p>Quantity: {map.get(products[i].id)}</p>
          </div>
          <p>Price: ₹{products[i].price * (map.get(products[i].id))}</p>
        </div>
      );
    }
    if (map.get(products[i].id) !== undefined) {
      totalPrice += products[i].price * (map.get(products[i].id));
    }
  }

  localStorage.setItem('cart', JSON.stringify(cartElements))
  console.log(localStorage.getItem('cart'))
  console.log(cartElements);
  if (totalPrice === 0) {
    return (
      <div className="flex w-screen h-screen justify-center items-center text-white bg-gradient-to-r from-green-500 ">
        <div className="flex flex-col w-1/3 h-2/3 bg-gray-900 justify-center items-center">
          <div className="font-bold text-xl mb-10">
            Cart is Empty, Please add more items
          </div>
          <Link
            to="/"
            className="font-bold text-green-600 text-center w-40 h-8 bg-white border-gray-500 border-2 "
          >
            Return To Home
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center text-white bg-gradient-to-r from-blue-600 ">
        <div className="w-2/3 h-2/3 bg-gray-900">
          {drinkElements}
          <div className="w-3/3 h-1/5 flex mx-10 justify-between items-center">
          <p></p>
          <div>Total Price: ₹{totalPrice}</div>   
          </div>
        </div>
        <Link
          to="/order"
          className="font-bold text-green-600 text-center w-40 h-8 bg-white border-gray-800 border-2 "
        >
          Order Now!
        </Link>
          
      </div>
    );
  }
}

export default Cart;
// login
// firebase(order)
