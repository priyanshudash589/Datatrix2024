import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 
export function ProfileCard({name}) {
  return (
    <Card className="w-96 p-[2rem]  bg-black border-dashed border-[5px] border-[#72CBD3] ml-[2rem] mt-7">
      <CardHeader floated={false} className="bg-transparent">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className="rounded-full"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2" >
          {name || "Souvik"}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </Card>
  );
}