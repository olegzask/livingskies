import React from "react";
import "./teamcard.styles.css";

export const TeamCard = ({ user }) => {
  const { name, position, experience, specialization, about, picture } = user;

  console.log(specialization);
  return (
    <div className="user-card">
      <img className="member-pic" src={picture} alt="team" />
      <div className="member-info">
        <span className="member">Name: {name}</span>
        <span className="member">Position: {position}</span>
        <span className="member">
          Specialization:{" "}
          {specialization.map((el) =>
            specialization.length > 1 ? `${el} / ` : el
          )}
        </span>
        <span className="member">Experience: {experience}</span>
        <span className="member">About: {about}</span>
      </div>
    </div>
  );
};
