import React, { useState, useEffect } from "react";
import axios from "axios";
import img from '../assets/EventImages/2.png';
import LoaderSlot from '../assets/loaderslot.gif'
function Event() {
  const event = {
    title: "Idea Explorer",
    about:
      "Welcome to the Idea Explorer Forum, a dynamic space where you can showcase your innovative ideas and initiatives. This event is designed for thinkers, creators, and problem-solvers who are eager to share their concepts and receive valuable feedback. It’s more than just a presentation—it's an opportunity to learn from industry experts, gain insights into the latest trends, and refine your ideas with the help of experienced mentors. Plus, you'll have the chance to connect with like-minded individuals, expanding your network and finding potential collaborators. Whether you’re just starting out or looking to take your ideas to the next level, the Idea Explorer Forum is the perfect place to ignite your creativity and make meaningful connections. Join us and bring your ideas to life!",
    facultycoordinator: {
      faculty1: "Dr. A. MANJU, AP/CSE - 8903976381",
      faculty2: " Ms. SRINARAYANI K, AP/CSE - 9791138865",
    },
    studentcoordinator: {
      student1: "JASMINE FATHIMA K - 8270821999",
      student2: "VIBHUVAN B - 9003200177",
    },
    date: "",
    venue: "",
    price: 100, // Assuming the event is free, so price is set to 0
  };

  const [registrationStatus, setRegistrationStatus] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(null);
  const [totalSlots, setTotalSlots] = useState(null);
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

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const { data } = await axios.get("https://datatrix2024-backend.onrender.com/idea-explorer-slots");
        setAvailableSlots(data.availableSlots);
        setTotalSlots(data.totalSlots);
      } catch (error) {
        console.error("Error fetching slot details:", error);
        setRegistrationStatus("Error loading slot details.");
      }
    };

    fetchSlots();
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (availableSlots <= 0) {
      setRegistrationStatus("No available slots.");
      setLoading(false); // Ensure loading is set to false if no slots are available
      return;
    }

    try {
      const payload = {
        amount: event?.price * 100, // Convert price to paise
        currency: "INR",
        receipt: `receipt#${Math.random().toString(36).substring(7)}`,
        notes: {
          eventTitle: event?.title,
        },
      };

      const { data: order } = await axios.post(
        "https://datatrix2024-backend.onrender.com/idea-explorer-create-order",
        payload
      );

      const options = {
        key: "rzp_test_yime1L5rinM9tw",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        handler: function (response) {
            axios
                .post("https://datatrix2024-backend.onrender.com/idea-explorer-verify-payment", {
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
                .then((verificationResponse) => {
                    alert("Payment verified successfully!");
                    setIsRegistered(true);
                    setAvailableSlots((prevSlots) => prevSlots - 1);
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
    }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Order creation failed:", error);
      setError("Order creation failed");
    } finally {
      setLoading(false);
    }
  };

  if (availableSlots === null) return <><div className="bg-black w-sceen h-screen flex justify-center items-center"><img src={LoaderSlot} alt="" /></div></>;

  return (
    <div className="bg-patt-grid h-auto w-screen text-white">
      <div className=" container mx-auto pt-8">
        <h1 className="text-6xl font-bold mb-4 text-center font-orbitron p-6">
          {event?.title || "Event Name"}
        </h1>
        <div className=" flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="md:w-1/2 md:mr-8">
            <img src={img} alt="Event" className="rounded-md mb-4" />
            <p className="text-gray-200 mb-4 font-orbitron p-7 leading-loose">
              {event?.about}
            </p>
          </div>
          <div className="md:w-1/2">
            
            <h2 className="text-xl font-bold mb-2 font-orbitron">
              Faculty coordinator:
            </h2>
            <ul className="list-disc pl-5 text-gray-200 p-5">
              <li>{event.facultycoordinator.faculty1}</li>
              <li>{event.facultycoordinator.faculty2}</li>
            </ul>
            <h2 className="text-xl font-bold mb-2 font-orbitron">
              Student coordinator:
            </h2>
            <ul className="list-disc pl-5 text-gray-200 p-5">
              <li>{event.studentcoordinator.student1}</li>
              <li>{event.studentcoordinator.student2}</li>              
            </ul>
            <div className="bg-dark rounded-md h-auto shadow-md p-4 mt-4">
              <h3 className="text-xl font-bold text-white-800 mb-2 font-orbitron">
                ₹{event?.price === 0 ? "Free" : `${event?.price} / Per Team`}
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
                {availableSlots !== null && totalSlots !== null ? (
                  `${availableSlots} / ${totalSlots} slots available`
                ) : (
                  "No slot information available"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
