import React from "react";
import { useSelector } from "react-redux";
import classes from "./Main.module.css";
import Moviesbar from "./Moviesbar";
import { selectValue } from "@/createslice/MovieSlice";
import Image from "next/image";
import { useRouter } from "next/router";


function Main({ moviesData }) {

  const dataList = useSelector(selectValue);
 const router = useRouter()

  const { id, movieImage, Name, language, premiered, rating, genres } = dataList;

  let imagelink
  if(movieImage){
 imagelink = movieImage.original;
  }


  return (
    <main>

      <div className={classes.backImage}>
        <Image src={imagelink} alt="" fill style={{objectFit: "contain", opacity: ".5"}}/>
      </div>
      <section
        className={classes.detailscontainer}
      >
        {Name ? <h1>{Name}</h1> : <h1>Movie Name</h1>}
        <p>
          Premiered : <span>{premiered}</span>
        </p>
        {rating ? <p>
          Rating :  <span>{rating.average}</span>
        </p>: <p> Rating :  <span>9</span></p>}
        <p>
          language :<span>{language}</span>
        </p>
        {genres && <p>
          Genres : <span>{genres[0]} |{genres[1]}</span>
        </p>}
        <button className={classes.button} onClick={()=> router.push("/Summary")}>Summary</button>
      </section>

      <section className={classes.moviecontainers}>
        {moviesData.map(({ show }) => (
          <Moviesbar
            key={show.id}
            id={show.id}
            Name={show.name}
            movieImage={show.image}
            language={show.language}
            genres={show.genres}
            premiered={show.premiered}
            rating={show.rating}
            summary={show.summary}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
