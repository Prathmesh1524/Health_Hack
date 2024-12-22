import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Have any questions or want to get in touch? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Other Ways to Reach Us</h2>
          <p className="text-lg text-gray-700 mb-2">
            You can also reach us through the following methods:
          </p>
          <ul className="list-none space-y-2">
            <li className="text-lg text-gray-700">
              <span className="font-semibold">Phone:</span> +999999999  
            </li>
            <li className="text-lg text-gray-700">
              <span className="font-semibold">Email:</span> contact@ourcompany.com
            </li>
            <li className="text-lg text-gray-700">
              <span className="font-semibold">Address:</span> PHN TCHNOLOGIES PUNE 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
