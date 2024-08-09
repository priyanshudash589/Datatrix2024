import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Event() {
  const { state } = useLocation();
  const { event } = state;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // Create an order on the server
      const { data: order } = await axios.post('http://localhost:5000/create-order', {
        amount: 129, // Amount in rupees
        currency: 'INR',
        receipt: `receipt#${Math.random().toString(36).substring(7)}`,
        notes: {
          eventTitle: event?.title,
          eventDescription: event?.description,
        },
      });

      // Initialize Razorpay payment options
      const options = {
        key: 'rzp_test_yime1L5rinM9tw', // Enter the Razorpay key ID
        amount: order.amount, // Amount in the smallest currency unit
        currency: order.currency,
        name: event?.title || 'Your Company Name',
        description: event?.description || 'Event Registration',
        order_id: order.id, // Order ID created on your server
        handler: function (response) {
          // Handle successful payment here
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);

          // Optionally, you can send the payment details to the server for verification
          axios.post('http://localhost:5000/verify-payment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }).then((res) => {
            alert('Payment verified successfully!');
          }).catch((error) => {
            console.error('Payment verification failed', error);
          });
        },
        prefill: {
          name: "Customer Name", // Replace with actual customer data if available
          email: "customer@example.com",
          contact: "9999999999", // Replace with actual customer contact if available
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Order creation failed:', error);
      setError('Order creation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-patt-grid h-full w-screen text-white">
        <div className="container mx-auto p-4 pt-8">
          <h1 className="text-6xl font-bold mb-4 text-center font-orbitron p-6">
            {event?.title || 'Event Name'}
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <div className="md:w-1/2 md:mr-8">
              <img
                src={event?.image}
                alt="Event"
                className="rounded-md mb-4"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-200 mb-4 font-orbitron p-7 leading-loose">
                {event?.about}
              </p>
              <h2 className="text-xl font-bold mb-2 font-orbitron">
                Faculty coordinator:
              </h2>
              <ul className="list-disc pl-5 text-gray-200 p-5">
                <li>Mrs.S.Sridevi - 9842483178</li>
                <li>Ms.B.Aarthi - 9585052507</li>
              </ul>
              <h2 className="text-xl font-bold mb-2 font-orbitron">
                Student coordinator
              </h2>
              <ul className="list-disc pl-5 text-gray-200 p-5">
                <li>Cibi Gowtham - 7904834186</li>
                <li>Harish - 9791438258</li>
              </ul>
              <div className="bg-dark rounded-md h-[7rem] shadow-md p-4 mt-4">
                <h3 className="text-xl font-bold text-white-800 mb-2 font-orbitron">
                  ₹129 / Per Team
                </h3>
                <button
                  className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
                  onClick={handlePayment}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Register Now'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
            </div>
          </div>
          <div className="bg-dark-60 rounded-md shadow-md p-4">
            <h2 className="text-xl font-bold text-white-800 mb-4">
              RULES FOR LIGHTS OUT
            </h2>
            <ul className=" list-decimal pl-5 text-white-600">
              <li>
                FILM DURATION: STAY WITHIN THE TIME LIMIT OF 10-15 MINS TO
                MAINTAIN JUDGES ATTENTION.
              </li>
              <li>USE OF COPYRIGHTED MATERIAL IS PROHIBITED.</li>
              <li>
                FILMS SHOULD BE ORIGINAL AND NOT A RE-EDIT OR ALTERATION OF AN
                EXISTING FILM.
              </li>
              <li>ADHERE TO THE THEME AND GUIDELINES PROVIDED.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
