const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-24">
      <div className="flex items-center mb-[60px] justify-center flex-col">
        <div className="bg-green-50 min-h-screen flex items-center justify-center px-4 py-12">
          <form
            action="https://usebasin.com/f/5529e87fd7f1"
            method="POST"
            id="form"
            className="w-[500px] max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4"
          >
            <h2 className="text-3xl font-semibold text-center text-green-700">
              Contact Us
            </h2>

            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>

            <div>
              <label
                htmlFor="number"
                className="block mb-1 font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
