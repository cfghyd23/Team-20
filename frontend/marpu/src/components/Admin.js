import React, { useState } from 'react';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
        }),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        // Reset the form fields
        setTitle('');
        setDescription('');
        setImageUrl('');
      } else {
        console.error('Error sending form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div className="bg-orange-200 p-8 rounded-lg">
      <h1 className="text-3xl mb-6 text-orange-800">Admin Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-lg text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
