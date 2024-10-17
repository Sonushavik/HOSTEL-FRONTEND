import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className=" max-w-[1240px] flex flex-col items-center justify-center py-10 bg-red-900 bg-opacity-10 mx-auto mx-auto">
      <h className="text-[20px] md:text-[30px] font-bold mb-8 ">Contact Us</h>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl px-8 w-full px-6">
        {/* Contact Information Section */}
        <div>
          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-red-900 text-2xl  mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Our Office Address</h3>
              <p className="text-slate-700">
                Muzaffarpur, Bihar 
              </p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <FaEnvelope className="text-red-900 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">General Enquiries</h3>
              <p className="text-slate-700">abc@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <FaPhoneAlt className="text-red-900 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="text-slate-700">+91-1234567891</p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <FaClock className="text-red-900 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Our Timing</h3>
              <p className="text-slate-700">Mon - Sun: 10:00 AM - 07:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-slate-100 p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <input
                className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
                type="text"
                placeholder="Your Contact No."
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold p-3 rounded hover:bg-red-900 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
