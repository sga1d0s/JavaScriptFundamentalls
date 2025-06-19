

export default class Time {
  constructor(minutes, hours, day) {
    this.minutes = minutes
    this.hours = hours
    this.day = day

    this.dayMoment = ""
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

    if (minutes > 180 ) {
      minutes = 180
    }

    do {
      minutes = minutes - 60
      hours = hours + 1

    } while (minutes >= 60);

    

    timePasses = "Time passes by " + hours + " hours " + minutes + " minutes. "

    return timePasses
  }

  getTime() {

  }

  main() {

  }
}