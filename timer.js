origin = new Date();


function Clock () {

}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
}

Clock.prototype.run = function() {
  this.currentTime = new Date();
  this.hours = this.currentTime.getHours();
  this.minutes = this.currentTime.getMinutes();
  this.seconds = this.currentTime.getSeconds();

  this.printTime();
  setInterval(this._tick.bind(this), 5000);
}

Clock.prototype._tick = function () {
  this.seconds += 5
  if (this.seconds >= 60) {
    this.minutes += 1;
    this.seconds -= 60;
  }
  if (this.minutes >= 60) {
    this.hours += 1;
    this.minutes -= 60;
  }
  if (this.hours >= 24) {
    this.hours -= 24;
  }

  this.printTime();
}

var clock = new Clock();

clock.run();
