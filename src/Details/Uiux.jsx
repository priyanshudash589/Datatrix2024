import React, { useState, useEffect } from "react";
import axios from "axios";
import img from '../assets/EventImages/2.png';
import LoaderSlot from '../assets/loaderslot.gif'

function Event() {
  const event = {
    title: "UI/UX Workshop",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae! Atque, praesentium necessitatibus voluptatem nesciunt dolorum consequatur deserunt? Quisquam voluptates ratione quibusdam itaque nisi, nihil repellendus delectus aperiam autem quidem?",
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
    price: 300,
  };

  const [registrationStatus, setRegistrationStatus] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(null);
  const [totalSlots, setTotalSlots] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([
    { name: "", email: "", phone: "", college: "" },
    { name: "", email: "", phone: "", college: "" },
    { name: "", email: "", phone: "", college: "" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMembers = [...teamMembers];
    updatedMembers[index][name] = value;
    setTeamMembers(updatedMembers);
  };

  useEffect(() => {
    const fetchSlots = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/workshop-slots");
        console.log("Slots response:", response.data);
        setAvailableSlots(response.data.availableSlots);
        setTotalSlots(response.data.totalSlots);
      } catch (error) {
        console.error("Error fetching slot details:", error);
        setError("Error loading slot details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (availableSlots <= 0) {
      setError("No available slots.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        amount: event?.price * 100,
        currency: "INR",
        receipt: `receipt#${Math.random().toString(36).substring(7)}`,
        notes: {
          eventTitle: event?.title,
        },
      };

      console.log("Creating order with payload:", payload);
      const { data: order } = await axios.post(
        "http://localhost:8080/workshop-create-order",
        payload
      );
      console.log("Order created:", order);

      const options = {
        key: "rzp_test_yime1L5rinM9tw",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        handler: function (response) {
          console.log("Payment successful:", response);
          verifyPayment(response);
        },
        prefill: {
          name: teamMembers[0].name,
          email: teamMembers[0].email,
          contact: teamMembers[0].phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Order creation failed:", error);
      setError("Failed to create order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (response) => {
    try {
      const verificationData = {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        teamName: teamName,
        teamMembers: teamMembers,
        participantEvent: event?.title,
        amount: response.amount,
      };

      console.log("Verifying payment:", verificationData);
      const verificationResponse = await axios.post(
        "http://localhost:8080/workshop-verify-payment",
        verificationData
      );
      console.log("Payment verification response:", verificationResponse.data);

      alert("Payment verified successfully!");
      setIsRegistered(true);
      setAvailableSlots((prevSlots) => prevSlots - 1);
    } catch (error) {
      console.error("Payment verification failed", error);
      setError("Payment verification failed. Please contact support.");
    }
  };

  if (loading) return <div className="bg-black w-screen h-screen flex justify-center items-center"><img src={LoaderSlot} alt="Loading..." /></div>;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-patt-grid h-full w-screen text-white">
      <div className="container mx-auto p-4 pt-8">
        <h1 className="text-6xl font-bold mb-4 text-center font-orbitron p-6">
          {event?.title || "Event Name"}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="md:w-1/2 md:mr-8">
            <img src={img} alt="Event" className="rounded-md mb-4" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-200 mb-4 font-orbitron p-7 leading-loose">
              {event?.about}
            </p>
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
                  name="teamName"
                  className="p-2 text-center rounded-xl text-black"
                  placeholder="Team Name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                {teamMembers.map((member, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-lg font-bold mb-2">Team Member {index + 1}</h4>
                    <input
                      type="text"
                      name="name"
                      className="p-2 text-center rounded-xl text-black mb-2"
                      placeholder={`Member ${index + 1} Name`}
                      value={member.name}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    <input
                      type="email"
                      name="email"
                      className="p-2 text-center rounded-xl text-black mb-2"
                      placeholder={`Member ${index + 1} Email`}
                      value={member.email}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    <input
                      type="text"
                      name="phone"
                      className="p-2 text-center rounded-xl text-black mb-2"
                      placeholder={`Member ${index + 1} Phone`}
                      value={member.phone}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    <input
                      type="text"
                      name="college"
                      className="p-2 text-center rounded-xl text-black"
                      placeholder={`Member ${index + 1} College`}
                      value={member.college}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                ))}
              </form>
              <button
                className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f]"
                onClick={handlePayment}
                disabled={isRegistered || loading || availableSlots <= 0}
              >
                {isRegistered
                  ? "Registration Complete"
                  : loading
                  ? "Processing..."
                  : "Register Now"}
              </button>
              <p className="text-white mt-4 font-bold font-orbitron">
                Available Slots: {availableSlots}
              </p>
              {registrationStatus && (
                <p className="text-red-500 mt-2 font-bold font-orbitron">
                  {registrationStatus}
                </p>
              )}
              {error && (
                <p className="text-red-500 mt-2 font-bold font-orbitron">{error}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
