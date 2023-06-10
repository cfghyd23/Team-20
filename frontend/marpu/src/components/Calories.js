import React, { useState } from 'react';

function Calories() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
            headers: {
              "X-Api-Key": ``,
            },})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col w-4/12 mx-auto mt- px-5 py-4 bg-gray-800 text-white rounded-2xl">
      <h2 className="font-bold text-2xl text-center">Calories Counter</h2>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col w-11/12 mx-auto mt- px-5 py-4 bg-gray-800 text-white rounded-2xl">
        <label className="font-medium text-md text-center mb-4">
          Enter the name of food/drink:
        </label>
          <input
            className="w-48 h-7 text-black text-md text-center mb-10"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Press Enter"
          />
        
        <button type="submit" className="font-medium">Submit</button>
      </form>

      {posts.length > 0 && (
        <ul className="font-bold text-2xl text-center">
          {posts.map((post, index) => (
            <li key={index}>{JSON.stringify(post.calories)} per {JSON.stringify(post.serving_size_g)}g</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Calories;
