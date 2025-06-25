const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-24">
      <div className="flex items-center mb-[60px] justify-center flex-col">
        <p className="text-3xl text-green-700 font-bold">Contact</p>
        <form
          action="https://formsubmit.co/handquarterscancerhope@gmail.com"
          method="POST"
          target="_self"
          className="flex-col flex sm:w-[500px] w-[360px] p-2 bg-green-50 rounded-2xl shadow-2xl mt-2 gap-3"
        >
          {/* Required hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Mail from C.H.O!!!" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://cancer-hope-org-help.vercel.app/thankyou"
          />

          <input
            type="text"
            name="name"
            placeholder="Name..."
            required
            className="border border-green-600/50 rounded-md p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            required
            className="border border-green-600/50 rounded-md p-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone..."
            required
            className="border border-green-600/50 rounded-md p-2"
          />
          <textarea
            name="message"
            cols="30"
            rows="30"
            placeholder="Enter Message..."
            required
            className="border h-[100px] border-green-600/50 rounded-md p-2"
          ></textarea>
          <button
            type="submit"
            className="bg-green-800 w-[60%] m-auto py-1 text-white font-bold rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
