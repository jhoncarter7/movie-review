import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectValue } from "@/createslice/MovieSlice";
import Image from "next/image";
import classes from "../components/Summary.module.css";
import FrormWindow from "@/components/FrormWindow";
// import Success from "@/components/Success";
function Summary() {
  const moviesummary = useSelector(selectValue);
  const { summary, movieImage, Name, language, premiered, rating, genres } = moviesummary;
const [openForm, setOpenForm] = useState(false)
// const [smallPoup, setSmallPopup] = useState(false)

  let imagelink;
  if (movieImage) {
    imagelink = movieImage.original;
  }
// Its use to remove tags from string
  // function removeTags(str) {
  //   if ((str===null) || (str===''))
  //     return false;
  //   else
  //     str = str.toString();
  //   return str.replace( /(<([^>]+)>)/ig, '');
  // }

  function removeTags(str) {
    if (!str || str === '') {
      return '';
    }
    str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
  }
  
//  const popupItem = (somevalue) => {
// setSmallPopup(somevalue)
//  }

  return (
    <section className={classes.summarycontainer}>
      <div className={classes.summarybox}>
        <div className={classes.summaryImage}>
          <Image src={imagelink} alt="" fill style={{ objectFit: "contain" }} />
        </div>
        <div >
          <section className={classes.detailscontainer}>
            {Name ? <h1>{Name}</h1> : <h1>Movie Name</h1>}
            <p>
              Premiered : <span>{premiered}</span>
            </p>
            {rating ? (
              <p>
                Rating : <span>{rating.average}</span>
              </p>
            ) : (
              <p>
                {" "}
                Rating : <span>9</span>
              </p>
            )}
            <p>
              language :<span>{language}</span>
            </p>
            {genres && (
              <p>
                Genres :{" "}
                <span>
                  {genres[0]} |{genres[1]}
                </span>
              </p>
            )}
      
          </section>
          <button className={classes.button} onClick={() => setOpenForm(true)} >Book Ticket</button>
    
        </div>
      </div>
      <p className={classes.para}>{removeTags(summary)}</p>
      {openForm && <FrormWindow  onclose={() => setOpenForm(false)} Name={Name} />}
     {/* { smallPoup && <Success />} */}
    </section>
  );
}

export default Summary;
