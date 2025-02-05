
const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 min-h-screen flex justify-center items-center overflow-hidden">
      <div className="form-container bg-white bg-opacity-90 p-12 rounded-3xl shadow-xl w-[500px] animate-fadeIn transform hover:scale-105 hover:rotate-3d transition-all">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 animate-slideDown">Contact Us</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="cc3f8d62-c5a5-484f-a6d9-8a844a8c169b" />
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 mb-6 border-2 border-gray-300 rounded-xl text-lg focus:border-indigo-600 focus:ring-indigo-500 focus:outline-none focus:scale-110 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 mb-6 border-2 border-gray-300 rounded-xl text-lg focus:border-indigo-600 focus:ring-indigo-500 focus:outline-none focus:scale-110 transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 mb-6 border-2 border-gray-300 rounded-xl text-lg focus:border-indigo-600 focus:ring-indigo-500 focus:outline-none focus:scale-110 transition-all resize-y h-40"
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-br from-green-600 to-red-600 text-white rounded-xl text-xl cursor-pointer transition-all hover:bg-gradient-to-br hover:from-blue-800 hover:to-green-800 transform hover:scale-110 hover:rotate-2 hover:-translate-y-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
