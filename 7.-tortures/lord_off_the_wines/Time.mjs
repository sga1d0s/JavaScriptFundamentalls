
export default class Time {
  constructor(minutes, hours, day) {
    this.minutes = minutes
    this.hours = hours
    this.day = day
  }

  getTimeDay() {
    // obtenemos el momento del día

    let dayMoment = ""

    if (this.hours >= 12 && this.hours < 18) {
      dayMoment = "Afternoon"
    } else if (this.hours >= 18 && this.hours < 20) {
      dayMoment = "Dusk"
    } else if ((this.hours >= 20 && this.hours <= 23) || (this.hours >= 0 && this.hours < 3)) {
      dayMoment = "Night"
    } else if (this.hours >= 3 && this.hours < 7) {
      dayMoment = "Dawn"
    } else if (this.hours >= 7 && this.hours < 12) {
      dayMoment = "Morning"
    } else dayMoment = "error"

    return dayMoment
  }

  passBy(minutes) {
    // avanzamos tantos minutos como indiquemos
    let timePasses = ""
    let hours = 0

    if (minutes > 180) {
      minutes = 180
    }

    do {
      minutes = minutes - 60
      hours = hours + 1
    } while (minutes >= 60);

    this.hours += hours
    this.minutes += minutes

    timePasses = "Time passes by " + hours + " hours " + minutes + " minutes."

    return timePasses
  }

  getTime() {
    // devuelve el día hora y minutos
    return `"Day ${this.day}, ${this.hours} hours ${this.minutes} minutes."`
  }

  main() {

    // getTime
    console.log(this.getTime())
    console.log("-----------------")

    // passBy 75
    console.log(this.passBy(75))
    console.log("-----------------")

    // getTime
    console.log(this.getTime())
    console.log("-----------------")

    // getTimeDay
    console.log("It is " + this.getTimeDay())
    console.log("-----------------")

  }
}