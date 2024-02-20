document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    let timerInterval;
    let miliseconds = 0,
      seconds = 0,
      minutes = 0,
      hours = 0;

    function updateTime() {
      miliseconds += 10;
      if (miliseconds === 1000) {
        miliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      document.getElementById("mil").innerText = miliseconds
        .toString()
        .padStart(3, "0");
      document.getElementById("sec").innerText = seconds
        .toString()
        .padStart(2, "0");
      document.getElementById("min").innerText = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("hrs").innerText = hours.toString().padStart(2, "0");
    }

    function startPause() {
      let button = document.getElementById("playPauseBtn");
      if (button.innerHTML === '<i class="fa-solid fa-play"></i>') {
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
        timerInterval = setInterval(updateTime, 10);
      } else {
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
        clearInterval(timerInterval);
      }
    }

    function reset() {
      clearInterval(timerInterval);
      miliseconds = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
      document.getElementById("mil").innerText = "000";
      document.getElementById("sec").innerText = "00";
      document.getElementById("min").innerText = "00";
      document.getElementById("hrs").innerText = "00";
      document.getElementById("playPauseBtn").innerHTML =
        '<i class="fa-solid fa-play"></i>';
    }

    document.getElementById("playPauseBtn").addEventListener("click", startPause);
    document.getElementById("resetBtn").addEventListener("click", reset);
});
