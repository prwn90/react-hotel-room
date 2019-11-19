import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

const Rooms= () => {
  return (
  	<>
  	<Hero hero="roomsHero">
  	  <Banner title="hotel rooms">
  	  	<Link to="/" className="btn-primary">
  	  		home page
  	  	</Link>
  	  </Banner>
  	</Hero>
  	<RoomContainer/>
  	</>
  );
};

export default Rooms;