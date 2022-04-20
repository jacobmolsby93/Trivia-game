import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid d-flex align-items-center h-100">
        <div className="flex-wrapper w-100 p-0 m-0">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 d-flex justify-content-center">
              <div className="inner-wrapper text-center">
                <h1 className="main-title text-white">Do you know it all?</h1>
                <h4 className="sub-title text-white">Test your knowledge</h4>
                <div className="spacebox"></div>
                <Link className="enter-button" to="/details">
                  Enter
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
