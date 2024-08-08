import { useLocation } from 'react-router-dom';

function Event() {
  const { state } = useLocation();
  const { event } = state;

  return (
    <>
      <div className="bg-patt-grid h-full w-screen text-white">
        <div className="container mx-auto p-4 pt-8">
          <h1 className="text-6xl font-bold mb-4 text-center font-orbitron p-6">
          {event?.title || "Event Name"}
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <div className="md:w-1/2 md:mr-8">
              <img
                src={event?.image}
                alt="Lights Out"
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
                {/* <button className="bg-dark-500 mt-[2.5rem] border-[1px] hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-[3rem] rounded-full focus:outline-none font-orbitron focus:shadow-outline border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                  Register Now
                </button> */}
                <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OiEsiY4wlrcNW0" async> </script></form>
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
                SUBMISSIONS WILL BE EVALUATED BASED ON THE EFFECTIVENESS OF THE
                NOIR ATMOSPHERE.
              </li>
              <li>
                ANY FORM OF VULGARITY WILL LEAD TO IMMEDIATE DISQUALIFICATION
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
