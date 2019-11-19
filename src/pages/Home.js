import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from '../components/Services';
import FeaturedRooms from "../components/FeaturedRooms";


export default function Home() {
  return (
   <>
     <Hero>
    	<Banner title="perfect rooms" subtitle="hotel rooms starting at $99">
    		<Link to="/rooms" className="btn-primary">
    			Rooms!
    		</Link>
    	</Banner>
    </Hero>
    <Services />
    <FeaturedRooms />

  </>
 );
}

