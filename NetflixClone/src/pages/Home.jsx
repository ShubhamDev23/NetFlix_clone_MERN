import React from 'react'
import "../MycssFiles/home.css"
import Navbar from "../componants/Navbar"
import Banner from "../componants/Banner"
import Row from '../componants/Row'
import request from '../Requests'
import Footer from '../componants/Footer'
const Home = () => {
  return (
    <>
    <div className="navbar">
    <Navbar/>
    </div>
    <Banner/>
    
   <div className="row_componant">
   <Row title="NETFLIX ORIGINALS"
   fetchedURL={request.fetchNetflixOriginals}
   isLargeRow
   isliked
    />
    <Row title="Trending Movies"
    fetchedURL={request.fetchTrendingMovies}
    
    />
    
    <Row title="Top Rated"
    fetchedURL={request.fetchTopRatedMovies}
    />
    <Row title="Comedy Movies "
    fetchedURL={request.fetchComendyMovies}
    />
    <Row title=" Romance Movies"
    fetchedURL={request.fetchromanceMovies}
    />
    <Row title=" Documentries "
    fetchedURL={request.fetchdocumentryMovies}
    />
    <Row title="Horror Movies "
    fetchedURL={request.fetchHorrorMovies}
    />
   </div>
   <Footer/>

    </>
  )
}

export default Home
