import React, { useRef } from "react";
import classes from "../components/FormWindow.module.css";
function FrormWindow({onclose, Name}) {
 const nameRef = useRef()
 const emailRef = useRef()
 const ageRef = useRef()
 const seatRef = useRef()



 const localstoragehandle = () =>{
  localStorage.setItem("Name", nameRef.current.value)
  localStorage.setItem("email", emailRef.current.value)
  localStorage.setItem("age", ageRef.current.value)
  localStorage.setItem("seat", seatRef.current.value)
 onclose()


 }
 

  return (
    <section className={classes.overlay}>
      <div className={classes.modelconatiner}>
        <p>{Name}</p>
        <form className={classes.modelform} onSubmit= {localstoragehandle}>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" placeholder="Your name" ref={nameRef} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" ref={emailRef} required />
          <label htmlFor="age">Age</label>
          <input type="age" id="age" placeholder="Your age" ref={ageRef} required />
          <label htmlFor="number">No. of seat</label>
          <input
            type="number"
            id="number"
            placeholder="number of seat"
            ref={seatRef}
            required
          />
          <div className={classes.buttoncontainer}>
          <button className={classes.button} onClick={onclose}>Cancel</button>
          <button className={classes.button} type="submit"  >confirm booking</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FrormWindow;
