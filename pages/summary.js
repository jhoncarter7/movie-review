import React from 'react'
import { useSelector } from 'react-redux'
import { selectValue } from '@/createslice/MovieSlice'
import Image from 'next/image';
import classes from '../components/Summary.module.css'
function summary() {
    const moviesummary = useSelector(selectValue)
    const {summary, movieImage} = moviesummary;
    let imagelink
    if(movieImage){
   imagelink = movieImage.original;
    }
  return (
    <section className={classes.summarycontainer}>
      <div className={classes.summarybox}>
      <div className={classes.summaryImage}>
        <Image src={imagelink} alt="" fill style={{objectFit: "contain"}}/>
      </div>
        <p className={classes.para}>{summary}</p>
        </div>
        <button className={classes.button}>Book Ticket</button>
    </section>
  )
}

export default summary