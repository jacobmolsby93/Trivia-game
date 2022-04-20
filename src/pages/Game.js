import React, { useState } from "react";
import profile from "../images/profile-image.png";
import heart from "../images/heart.png";
import heartLost from "../images/heart-lost.png";
import rec from "../images/rec.png";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Game() {
  const location = useLocation();
  const history = useNavigate();
  let profile_image;
  if (profile_image != null) {
    profile_image = location.state.profile_image;
  }
  let name;
  if (name != null) {
    name = location.state.name;
  }
  console.log(location)
  const [highscore, setHighscore] = useState(0)
  


  const api_url = "https://the-trivia-api.com/questions";

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    const randomQuestion = data[Math.floor(Math.random() * data.length)];
    data = randomQuestion;
    const correctAnswer = data.correctAnswer;
    GetCorrectAnswerFromData(data, correctAnswer);
    show(data);
    if (response) {
      hideloader();
    }
  }
  // Function to hide the loader
  function hideloader() {
    const loading = document.getElementById("loading")
  }

  /* Show Data to return () */
  function show(data) {
    // questionNumber
    let number = `
      // A counter that counts the total number of questions
    `;
    // questionCategory
    let category = `
    <h6 class="text-small">${data.category}</h6>
    `;
    // questionStatement
    let question = `
    <p class="m-0">
    ${data.question}
    </p>
    `;
    // answerList
    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    var allAnswers = [
      `${data.correctAnswer} <span class="hidden" id="thisOne"></span>`,
      `${data.incorrectAnswers[0]}`,
      `${data.incorrectAnswers[1]}`,
      `${data.incorrectAnswers[2]}`,
    ];

    shuffle(allAnswers);
    const noComma = allAnswers;

    // category
    document.getElementById("questionCategory").innerHTML = category;
    document.getElementById("questionStatement").innerHTML = question;
    document.getElementById("answer-item-1").innerHTML = noComma[0];
    document.getElementById("answer-item-2").innerHTML = noComma[1];
    document.getElementById("answer-item-3").innerHTML = noComma[2];
    document.getElementById("answer-item-4").innerHTML = noComma[3];
    // document.getElementById("questionCategory").innerHTML = category;
  }

  function LoseLife(timeSeconds) {
    // HTML elements
    const lifeOne = document.getElementById("lifeOne");
    const lifeTwo = document.getElementById("lifeTwo");
    const lifeThree = document.getElementById("lifeThree");
    // Loose - wrong answer
    if (incorrectList.size === 1) {
      lifeOne.src = heartLost;
    } else if (incorrectList.size === 2) {
      lifeTwo.src = heartLost;
    } else {
      lifeThree.src = heartLost;
      LoseGame();
    }
    // Loose - no time
    if (timeSeconds === 0) {
      const lifeList = [lifeOne, lifeTwo, lifeThree];
      for (let i = 0; i < lifeList.length; i++) {
        if (lifeList[i].src != heartLost) {
          lifeList[i].src = heartLost;
        }
      }
      LoseGame();
    }
  }

  let timeSeconds = 120;
  let timeOut = 1200;
  let timerRunning;
  let gameRunning = false;
  

  const LoseGame = () => {
    document.getElementById("spinner").classList.remove("rotate");
    setHighscore(correctList.size)
    showReplay();
    gameRunning = false;
  };



  const RunGame = () => {
    gameRunning = true;
    startTimer();
    GenerateNewQuestion();
  };

  const timer = () => {
    timeSeconds--;
    if (timeSeconds == 0) {
      LoseLife(timeSeconds);
    }
    if (gameRunning) {
      document.getElementById("second").innerHTML = timeSeconds;
    }
  };

  const startTimer = () => {
    timeSeconds = 120;
    if (!timerRunning) {
      timerRunning = setInterval(timer, 1000);
    }
  };

  // when you click a question, timer stops. when loaded timer starts

  function stopTimer() {
    clearInterval(timerRunning);
    // release our intervalID from the variable
    timerRunning = null;
  }
  // Timer end --------------------------------------------------------------------------------------------

  const GenerateNewQuestion = (data) => {
    if (gameRunning) {
      // This function should generate new questions aswell as starting a new timer each time
      // The function is called
      getapi(api_url);
      const getApiTrue = true;
      if (getApiTrue == true) {
        startTimer();
        document.getElementById("spinner").classList.add("rotate");
      }
    }
  };

  const NewQuestionCorrect = (data) => {
    if (gameRunning) {
      let correct = document.getElementsByClassName("correct-answer");
      const spinner = document.querySelector("#spinner");
      spinner.classList.remove("rotate");
      if (correct) {
        setTimeout(() => {
          GenerateNewQuestion();
          data.target.classList.remove("correct-answer");
        }, timeOut);
      }
    }
  };

  const NewQuestionIncorrect = (data) => {
    if (gameRunning) {
      // HTML elements
      let incorrect = document.getElementsByClassName("incorrect-answer");
      let correct = document.getElementById("thisOne");
      let parrent = correct.parentElement;
      const spinner = document.querySelector("#spinner");
      // Classes
      spinner.classList.remove("rotate");
      // Functions to call if incorrect
      LoseLife();
      // If click == incorrect
      if (incorrect) {
        setTimeout(() => {
          GenerateNewQuestion();
          data.target.classList.remove("incorrect-answer");
          parrent.classList.remove("correct-answer");
        }, timeOut);
      }
    }
  };

  // This is good for counter
  // Keeping score of how many right clicks you get
  const correctList = new Set();
  const GetCorrectAnswerFromClick = (data, target) => {
    if (gameRunning) {
      if (correct.length > 0) {
        if (data.target.innerText == correct.slice(-1)[0]) {
          correctList.add(data.target.innerText);
        }
      }
      data.target.classList.add("correct-answer");
      NewQuestionCorrect(data);
    }
  };

  const incorrectList = new Set();
  const GetIncorrectAnswerFromClick = (data) => {
    if (gameRunning) {
      if (data.target != correct) {
        incorrectList.add(data.target.innerText);
      }
      GetChildrenData(data);
      data.target.classList.add("incorrect-answer");
      NewQuestionIncorrect(data);
      return incorrectList;
    }
  };

  let correct = [];
  const GetCorrectAnswerFromData = (data, correctAnswer) => {
    correct.push(correctAnswer);
    return correct;
  };

  const GetChildrenData = (data) => {
    // Get the data for each child to compare to question clicked.
    // So incase of incorrect, The correct answer can be shown
    const parent = data.target.parentElement;
    const children = parent.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].innerText == correct.slice(-1)[0]) {
        children[i].classList.add("correct-answer");
      }
    }
  };

  const clickHandler = (data) => {
    if (gameRunning) {
      const bottom = document.getElementById("answer-item-4");
      stopTimer();
      if (data.target == bottom) {
        data.target.classList.add("border-radius-bottom");
      }
      if (data.target.children[0]) {
        // Correct Answer
        // Green to indicate correct answer
        // Maybe some sort of sound for correct as well ???
        // After 3 sec next question should render
        GetCorrectAnswerFromClick(data);
      } else {
        // Incorrect Answer
        // What should happen is
        // Red to indicate wrong answer
        // One life should be lost IE turn black,
        // The correct answer should be shown before the page rerenders
        // After 3sec next question should render
        GetIncorrectAnswerFromClick(data);
      }
    }
  };

  const hide = () => {
    let hidden = document.querySelector("#startScreen");
    let start = document.getElementById("runGame");
    hidden.classList.remove("d-block");
    hidden.classList.add("hidden");
    setTimeout(() => {
      RunGame();
    }, 1000)
  };

  const showReplay = () => {
    let replay = document.querySelector("#replayScreen");
    replay.classList.remove("d-none");
  };
  const playAgain = () => {
    let replay = document.querySelector("#replayScreen");
    replay.classList.add("d-none");
    history("/");
  };

    
  return (
    <div className="h-100">
      <div className="container-fluid d-flex align-items-center h-100">
        <div className="position-absolute d-block" id="startScreen">
          <div className="button-container h-100 d-flex align-items-center justify-content-center">
            <button className="enter-button" onClick={hide} id="run">
              <span id="runGame">Run Game</span>
            </button>
          </div>
        </div>
        <div id="replayScreen" className="position-absolute h-100 w-100 d-none">
          <div className="container-fluid h-100 d-flex align-items-center w-100 justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-6 bg-light d-flex justify-content-centers replay">
                <div className="wrapper text-center form-group">
                  <h1 className="pb-3 pt-5">{`You scored ${highscore}`}</h1>
                  <p>
                    Did you enjoy the game? Check out my portfolio website, or
                    one of the other links on the{" "}
                    <Link to={() => history("/")}>🏚️</Link> page 😊
                  </p>
                  <div className="wrapper w-100 d-flex justify-content-center pt-5 pb-2">
                    <button className="replay-button" onClick={playAgain}>
                      Play Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-wrapper w-100 p-0 m-0">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 d-flex justify-content-center game-background">
              <div className="player-information mb-3 d-flex justify-content-between">
                <div className="profile-inline d-flex align-items-center">
                  <img
                    className="profile-image-ingame"
                    src={profile_image ? location.state.profile_image : profile}
                    alt="Picture of the player"
                  />
                  <p className="text-white sub-title m-0 ms-2">
                    {name ? "name" : `${location.state.name}`}
                  </p>
                </div>
                <div className="health-information d-flex align-items-center">
                  <ul className="list-inline list-unstyled lifes-list p-2 d-flex align-items-center mb-0">
                    <li className="me-2">
                      <img
                        className="heart"
                        id="lifeOne"
                        src={heart}
                        alt="Heart icon"
                      />
                    </li>
                    <li className="me-2">
                      <img
                        className="heart"
                        id="lifeTwo"
                        src={heart}
                        alt="Heart icon"
                      />
                    </li>
                    <li>
                      <img
                        className="heart"
                        id="lifeThree"
                        src={heart}
                        alt="Heart icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="inner-wrapper text-center game-container"
                id="question"
              >
                <div className="question-wrapper d-flex align-items-center position-relative justify-content-center">
                  <div className="question--number position-absolute">
                    <h6 className="text-small" id="questionNumber">
                      Highscore {highscore}
                    </h6>
                  </div>
                  <div
                    className="question--category position-absolute"
                    id="questionCategory"
                  ></div>
                  <div
                    className="question ps-3 pe-3"
                    id="questionStatement"
                  ></div>
                </div>
                <div className="answer-wrapper">
                  <ul
                    className="list-unstyled mb-0 h-100 answer-list"
                    id="answerList"
                  >
                    <li
                      className="answer-item"
                      id="answer-item-1"
                      onClick={clickHandler}
                    ></li>
                    <li
                      className="answer-item"
                      id="answer-item-2"
                      onClick={clickHandler}
                    ></li>
                    <li
                      className="answer-item"
                      id="answer-item-3"
                      onClick={clickHandler}
                    ></li>
                    <li
                      className="answer-item"
                      id="answer-item-4"
                      onClick={clickHandler}
                    ></li>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="count-down-container d-flex align-items-center justify-content-center">
                  <img
                    id="spinner"
                    className="count-down"
                    src={rec}
                    alt="spinning circle"
                  />
                  <p className="count mb-0 text-white sub-title" id="timer">
                    <span id="second">120</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
