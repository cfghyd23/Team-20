import {useState} from "react";
let Cart = (new Map()); 
function Button({id, sendState})
{
  const savedCart = localStorage.getItem('cart');
  let initialCart
  let c
  initialCart = new Map(JSON.parse(savedCart))
  if(initialCart.get(id) === undefined)
  {
    c = 0
  }
  else
  {
    c = initialCart.get(id)
  }
  
  const [Num, setNum] = useState({
    id: id,
    count: c,
  });

  function handleClickMinus()
  {
    if(Num.count <= 1)
    {
        if(Num.count === 1)
        Num.count -= 1
        Cart.delete(Num.id)
    }
    else
    {
      
      Num.count -= 1
      Cart.set(Num.id,Num.count)
    }
    // localStorage.setItem('Cart',Cart);
    let array = Array.from(Cart);
    
    sendState(array)
  }
  function handleClickPlus()
  {
    if(Num.count === 0)
    {
      Cart.delete(Num.id)
    }
    if(Num.count >= 10)
    {
      
    }
    else
    {
      console.log(Num.count)
      Num.count += 1;
      console.log(Num.count)
      Cart.set(Num.id,Num.count)
      console.log(localStorage.getItem('items'));
    }
    let array = Array.from(Cart);
    sendState(array)
 
  }
   return (
    <div className="flex font-bold text-green-500 justify-between items-center w-24 h-6 border-gray-500 p-2.5 border-2">
    <div onClick={handleClickMinus}>-</div>
    <output>{Num.count}</output>
    <div onClick={handleClickPlus}>+</div>
    </div>
  );
}

export default Button;
// login
// multipage forms