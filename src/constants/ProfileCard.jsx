import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function ProfileCard({ name }) {
  return (
    <Card className="w-64 sm:w-72 md:w-80 lg:w-96 p-4 sm:p-6 md:p-[2rem] bg-black border-dashed border-2 sm:border-3 md:border-[5px] border-[#72CBD3] mx-auto sm:ml-[1rem] md:ml-[2rem] mt-4 sm:mt-5 md:mt-7">
      <CardHeader floated={false} className="bg-transparent">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
          className="rounded-full w-24 sm:w-28 md:w-32 mx-auto"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-lg sm:text-xl md:text-2xl"
        >
          {name || "Souvik"}
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium text-sm sm:text-base"
          textGradient
        >
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </Card>
  );
}
