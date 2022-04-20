import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

function HighScore() {
// Should render the highscore of all the players that have played
// As well as the highscore of the player that just played.
// Buttons to go back to the home page.
// The normal footer and header.
const location = useLocation()
console.log(location)


    return (
      <div>
        <Header/>
        
        <Footer/>
      </div>
    );
}

export default HighScore;