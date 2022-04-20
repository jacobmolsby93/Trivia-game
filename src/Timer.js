"use strict";

let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.reset.onclick = () => reset();

function returnData(input) {
    return input > 10 ? input : `0${input}`
  }

  function start() {
    cron = setInterval(() => { timer(); }, 10);
  }
  

  function reset() {
    second = 0;
    millisecond = 0;
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  }


  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 120) {
        console.log("you lost")
    }
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
