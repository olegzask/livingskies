import React from "react";
import { TeamCard } from "./TeamCard";
import { teamList } from "./teamlist";
import "./team.styles.css";

export const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-hdr">MEET OUR TEAM!</h2>
      <div className="team-list">
        {teamList.map((user) => (
          <TeamCard user={user} />
        ))}
      </div>
    </div>
  );
};
