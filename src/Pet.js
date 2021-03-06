import React from "react";
import { Link } from "@reach/router"

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;

  // placecorgi.com is a placeholder site. So we take 300x300 placeholder image
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
