import React from "react";

export const Map = () => {
  return (
    <div className="map">
      <iframe
        width="auto"
        height="auto"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Living%20Skies%20Window%20Tint&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="yes"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
  );
};
