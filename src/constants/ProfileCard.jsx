import React from 'react';
const profiles = [
  {
    name: 'Natalie Paisley',
    title: 'CEO / Co-Founder',
    imageUrl: 'https://docs.material-tailwind.com/img/team-3.jpg',
  },
  {
    name: 'John Doe',
    title: 'CTO / Co-Founder',
    imageUrl: 'https://docs.material-tailwind.com/img/team-2.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'CFO',
    imageUrl: 'https://docs.material-tailwind.com/img/team-1.jpg',
  },];

export function ProfileCard() {
  return (
    <div className="card bg-black-100 w-full sm:w-96 shadow-xl p-4 sm:p-8 bg-black border-dashed border-4 border-[#6f0b1d] mx-auto sm:ml-8">
      <figure className="bg-transparent flex justify-center">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-blue-gray-700 mb-2">Natalie Paisley</h2>
        <p className="text-blue-gray-500 font-medium">CEO / Co-Founder</p>
      </div>
    </div>
  );
}