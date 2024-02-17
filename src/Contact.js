// import "../src/contact.css"

const Contact = () => {
  return (
    <div>
      <h1 className="contact text-3xl text-center m-5 font-Cormorant">Let's Discuss here</h1>
      <form className="w-4/6 m-auto">
        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
          <div className="">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-black font-Philosopher"
            >
              First name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black font-Philosopher"
            >
              Last name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              placeholder="Doe"
              required
            />
          </div>

          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black font-Philosopher"
            >
              Phone number
            </label>
            <input
              type="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black font-Philosopher"
            >
              Email address
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
          <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black font-Philosopher"
            >
              Description
            </label>
            <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                cols="30"
                rows="10"
                required
              ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-Philosopher"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
