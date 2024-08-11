import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

function EventItems({ image, title, description, events }) {
  const navigate = useNavigate();

  const handleRegister = () => {
    const event = events.find((e) => e.title === title);
    if (event) {
      navigate(`/event/${event.title}`, { state: { event } });
    }
  };

  return (
    <Card className="max-w-[24rem] overflow-hidden backdrop-blur-sm p-6 bg-transparent border-[1px] border-[#e1fff2] rounded-[4rem] shadow-custom-glow">
      <CardHeader
        shadow={true}
        color="transparent"
        className="m-0 rounded-[2rem]"
      >
        <img
          src={image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}
          alt={title || "Event image"}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="white" className="font-orbitron" title={title}>
          {title || "UI/UX Review Check"}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 text-md font-orbitron">
          {description || "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others."}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between ">
        <Button variant="outlined" className="border-[#fff] text-white font-orbitron" onClick={handleRegister}>
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EventItems;
