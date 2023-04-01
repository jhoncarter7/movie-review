import React from 'react'
import classes from "./Success.module.css"
function Success() {
  return (
    <div className={classes.overlay}>
        <div className={classes.popup}>
            <p>successfully booked</p>
            <button className={classes.button}>X</button>
        </div>
    </div>
  )
}

export default Success