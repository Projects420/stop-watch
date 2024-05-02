let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
function startwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  if (timer !== null) {
    clearInterval(timer);
  }
  h = hours < 10 ? "0" + hours : hours;
  m = minutes < 10 ? "0" + minutes : minutes;
  s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = h + ":" + m + ":" + s;
  timer = setInterval(startwatch, 1000);
}
function stopwatch() {
  clearInterval(timer);
}
function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
