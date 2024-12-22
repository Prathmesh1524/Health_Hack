

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our website! We are a team of passionate individuals committed to providing the best service
          possible. Our mission is to deliver high-quality solutions that meet the needs of our diverse customers.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to empower our users by providing innovative solutions through technology. We aim to
          transform industries by leveraging cutting-edge technologies and offering personalized services that make
          a real impact.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Innovation: We thrive on creativity and new ideas.</li>
          <li>Integrity: We value honesty, transparency, and trust.</li>
          <li>Customer Focus: We are dedicated to understanding and meeting our customers' needs.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
            <p className="text-gray-600">Marketing Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
