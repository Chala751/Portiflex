const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to <span className="text-blue-600">Portiflex</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mb-8">
        Build your professional portfolio effortlessly — showcase your skills, projects,
        and experience in one flexible place.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-200">
        Get Started
      </button>
    </section>
  );
};

export default Home;
