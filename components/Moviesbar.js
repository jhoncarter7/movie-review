import React, { useState } from "react";
import classes from "./Moviesbar.module.css";
import Image from "next/image";
import { movieReducer } from "@/createslice/MovieSlice";
import { useDispatch } from "react-redux";
function Moviesbar(props) {
  const { Name, movieImage, id, language, premiered, rating, genres, summary } = props;
  const dispatch = useDispatch();

  console.log("jjoo");
  const sendingToslice = () => {
    dispatch(
      movieReducer.singleData({
        id,
        movieImage,
        Name,
        language,
        premiered,
        rating,
        genres,
        summary
      })
    );
    console.log("justclick");
  };
  return (
    <div className={classes.moviebox}>
      {movieImage && (
        <Image
          src={movieImage.medium}
          alt=""
          fill
          style={{ objectFit: "contain", borderRadius: "10%" }}
          onClick={sendingToslice}
        />
      )}

      <p>{Name} </p>
    </div>
  );
}

export default Moviesbar;
