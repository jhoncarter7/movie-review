import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'

// import styles from '@/styles/Home.module.css'
import classes from "../styles/Home.module.css"

// const inter = Inter({ subsets: ['latin'] })

export default function Home({moviesData}) {
  console.log(moviesData)
  return (
    <>
      <Head>
        <title>MoviesTrunc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className={classes.maiContener}>
        <Navbar/>
        <Main moviesData={moviesData}/>
      
      </main>
    </>
  )
}

export async function getStaticProps(){
  
  const moviesData = await fetch('https://api.tvmaze.com/search/shows?q=all').then((res) => res.json())

  return{
    props: {
      moviesData
    }
  }

}
