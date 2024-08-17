import { Carousel, Typography } from "@material-tailwind/react";
import { useState, useEffect } from 'react';
 
export function PreviousEvents() {
  const [images, setImages] = useState({
    guest: '',
    participant: '',
    coreTeam: ''
  });

  useEffect(() => {
    const loadImages = async () => {
      const guestImage = await import('../assets/EventImages/guest.JPG');
      const participantImage = await import('../assets/EventImages/particpant.JPG');
      const coreTeamImage = await import('../assets/EventImages/coreteam.JPG');

      setImages({
        guest: guestImage.default,
        participant: participantImage.default,
        coreTeam: coreTeamImage.default
      });
    };

    loadImages();
  }, []);

  return (
    <div className="bg-black lg:pt-[4rem]">
      <div className="text-center p-[3rem]" >
        <span className="text-4xl text-white font-orbitron bg-black">Our Previous Successful Events</span>
      </div>
      <Carousel autoplay loop>
        <div className="relative h-[55rem] w-full">
          <img
            src={images.guest}
            alt="Guest"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Learning from the Best of the Best
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Dive deep into the minds of industry leaders and experts who have mastered their craft. Gain unparalleled insights and knowledge from those who set the standards in their fields.

              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-[55rem] w-full">
          <img
            src={images.participant}
            alt="Participant"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Plunge into the depths of data
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Explore the infinite possibilities hidden within vast datasets. Uncover powerful patterns and trends that can transform raw data into actionable insights.

              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-[55rem] w-full">
          <img
            src={images.coreTeam}
            alt="Core Team"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Organizing Excellence with the best crew
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Experience seamless event management with a team dedicated to perfection. From start to finish, our expert crew ensures every detail is executed flawlessly, creating an unforgettable experience.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}