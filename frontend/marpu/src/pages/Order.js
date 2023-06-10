import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Order() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    id: '',
    price: 0.0,
  });

  useEffect(() => {
    axios
      .get('http://localhost:8000/order')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving orders: ', error);
      });
  }, []);

  const handleInputChange = (event) => {
    setNewOrder({
      ...newOrder,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8000/order', newOrder)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error inserting order: ', error);
      });

    setNewOrder({
      id: '',
      price: 0.0,
    });
  };

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.id} - {order.price}</li>
        ))}
      </ul>

      <h2>Add a New Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={newOrder.id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={newOrder.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
        }
  export default Order;