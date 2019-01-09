import $ from 'jQuery';
import { DateChecker } from './weekday';
import 'bootstrap/dist/css/bootstrap.min.css';
$(document).ready(function () {
  $('#dateForm').submit(function (event) {
    event.preventDefault();
    let inputedDate = $('input#date').val();
    let newDate = new DateChecker(inputedDate);
    $("span#result").text(newDate.getDayOfWeek());
  });
});