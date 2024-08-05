import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function ProfileCard() {
  return (
    <Card className="w-full sm:w-96 p-4 sm:p-8 bg-black border-dashed border-4 border-[#6f0b1d] mx-auto sm:ml-8">
      <CardHeader floated={false} className="bg-transparent flex justify-center">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </Card>
  );
}