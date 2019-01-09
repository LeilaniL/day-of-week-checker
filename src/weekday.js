import $ from 'jQuery';
export class DateChecker {
  constructor(inputedDate) {

    this.enteredDate = new Date(inputedDate);
  }
  getDayOfWeek() {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayIndex = (this.enteredDate).getDay();

    return daysOfWeek[dayIndex];
  }
}