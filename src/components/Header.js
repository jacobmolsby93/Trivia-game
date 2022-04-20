import React from "react"
import trivmaster from '../images/trivmaster.png'

export default function Header() {
    return(
        <header>    
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-8 d-flex justify-content-center pt-5 position-absolute">
                    <img class="trivmaster" src={trivmaster} alt="brandlogo" />
                </div>
            </div>
        </header>
    )
}