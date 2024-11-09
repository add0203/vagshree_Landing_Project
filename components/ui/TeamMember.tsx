"use client";
import React from "react";
export interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => (
  <div className="text-center">
    <img
      src={image}
      alt={`${name}`}
      className="rounded-full w-24 h-24 mx-auto mb-4"
    />
    <h3 className="font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{position}</p>
  </div>
);

export default TeamMember;
