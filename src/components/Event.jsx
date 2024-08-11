import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Event() {
  const { state } = useLocation();
  const { event } = state;
  const { title } = useParams();
  const [eventx, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [participant, setParticipant] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParticipant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

//   useEffect(() => {
//     const fetchEvent = async () => {
//         try {
//             const response = await axios.get(`/events/${title}`);
//             console.log("Fetched event data:", response.data);
//             if (response.data) {
//                 setEvent(response.data);
//             } else {
//                 setError('Event not found');
//             }
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false); // Set loading to false when request is complete
//         }
//     };

//     fetchEvent();
// }, [title]);


  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        amount: event?.price * 100,
        currency: "INR",
        receipt: `receipt#${Math.random().toString(36).substring(7)}`,
        notes: {
          eventTitle: event?.title,
          eventDescription: event?.description,
        },
      };

      const { data: order } = await axios.post(
        "http://localhost:8080/create-order",
        payload
      );

      const options = {
        key: "rzp_test_yime1L5rinM9tw",
        amount: order.amount,
        currency: order.currency,
        name: event?.title || "Your Company Name",
        description: event?.description || "Event Registration",
        order_id: order.id,
        handler: function (response) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
          console.log("Razorpay Order ID:", response.razorpay_order_id);
          console.log("Razorpay Payment ID:", response.razorpay_payment_id);
          console.log("Razorpay Signature:", response.razorpay_signature);

          // Sending the payment details to the server for verification
          axios
            .post("http://localhost:8080/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              participantName: participant.name,
              participantEmail: participant.email,
              participantPhone: participant.phone,
              participantCollege: participant.college,
              participantEvent: event?.title,
              amount: order.amount,
            })
            .then(() => {
              alert("Payment verified successfully!");
            })
            .catch((error) => {
              console.error("Payment verification failed", error);
              setError("Payment verification failed");
            });
        },
        prefill: {
          name: participant.name,
          email: participant.email,
          contact: participant.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Order creation failed:", error);
      setError("Order creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-patt-grid h-full w-screen text-white">
      <div className="container mx-auto p-4 pt-8">
        <h1 className="text-6xl font-bold mb-4 text-center font-orbitron p-6">
          {event?.title || "Event Name"}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="md:w-1/2 md:mr-8">
            <img src={event?.image} alt="Event" className="rounded-md mb-4" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-200 mb-4 font-orbitron p-7 leading-loose">
              {event?.about}
            </p>
            <h2 className="text-xl font-bold mb-2 font-orbitron">
              Faculty coordinator:
            </h2>
            <ul className="list-disc pl-5 text-gray-200 p-5">
              <li>Mrs. S. Sridevi - 9842483178</li>
              <li>Ms. B. Aarthi - 9585052507</li>
            </ul>
            <h2 className="text-xl font-bold mb-2 font-orbitron">
              Student coordinator
            </h2>
            <ul className="list-disc pl-5 text-gray-200 p-5">
              <li>Cibi Gowtham - 7904834186</li>
              <li>Harish - 9791438258</li>
            </ul>
            <div className="bg-dark rounded-md h-auto shadow-md p-4 mt-4">
              <h3 className="text-xl font-bold text-white-800 mb-2 font-orbitron">
                ₹{event?.price} / Per Team
              </h3>
              <form className="flex flex-col gap-2">
                <input
                  type="text"
                  name="college"
                  className="p-2 text-center rounded-xl text-black"
                  placeholder="College"
                  value={participant.college}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="name"
                  className="p-2 text-center rounded-xl text-black"
                  placeholder="Name"
                  value={participant.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  className="p-2 text-center rounded-xl text-black"
                  placeholder="Email"
                  value={participant.email}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="phone"
                  className="p-2 text-center rounded-xl text-black"
                  placeholder="Phone"
                  value={participant.phone}
                  onChange={handleInputChange}
                />
              </form>
              <button
                className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? "Processing..." : "Register Now"}
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <p className="mt-4 text-yellow-500 italic">
                {event.availableSlots !== undefined ? (
                    `${eventx.availableSlots} / ${eventx.totalSlots} slots available`
                ) : (
                    'No slot information available'
                )}
            </p>
            </div>
          </div>
        </div>
        <div className="bg-dark-60 rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold text-white-800 mb-4">
            RULES FOR LIGHTS OUT
          </h2>
          <ul className="list-decimal pl-5 text-white-600">
            <li>
              FILM DURATION: STAY WITHIN THE TIME LIMIT OF 10-15 MINS TO
              MAINTAIN JUDGES' ATTENTION.
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
  );
}

export default Event;
