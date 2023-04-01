import classes from "./Navbar.module.css";

import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import Link from "next/link";


const  Navbar = ()  =>{


  return (
    <nav className={classes.navbar}>
      <div className={classes.navname}>
        <h1>MoviesTrunc</h1>
      </div>

      <div className={classes.navmenu}>
    
        <h3  style={{color:"#15aabf"}}>Home</h3>
       
        <h3>Tv shows</h3>
        <h3>Movies</h3>
        <h3>Upcoming</h3>
      </div>

      <div className={classes.navsearch}>
        <MagnifyingGlassIcon />
      </div>

    </nav>
  );
}

export default Navbar;
