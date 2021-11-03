class Timer {
  constructor(inputTimer, startTimer, stopTimer, callBacks) {
    this.inputTimer = inputTimer;
    this.startTimer = startTimer;
    this.stopTimer = stopTimer;
    if (callBacks) {
      this.onStart = callBacks.onStart;
      this.onTick = callBacks.onTick;
    }
    this.startTimer.addEventListener("click", this.start);
    this.stopTimer.addEventListener("click", this.end);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.inputTimer.value);
    }
    this.intervalInt = setInterval(this.tick, 50);
  };
  end = () => {
    clearInterval(this.intervalInt);
  };
  tick = () => {
    if (this.inputValGS <= 0) {
      this.end();
    } else {
      this.inputValGS = this.inputValGS - 0.05;
      this.onTick(this.inputValGS);
    }
  };
  get inputValGS() {
    return parseFloat(this.inputTimer.value);
  }
  set inputValGS(time) {
    this.inputTimer.value = time.toFixed(2);
  }
}
