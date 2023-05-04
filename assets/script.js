// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  

// time elements
var time9am = $("#9AM");
var time10am = $("#10AM");
var time11am = $("#11AM");
var time12pm = $("#12PM");
var time1pm = $("#1PM");
var time2pm = $("#2PM");
var time3pm = $("#3PM");
var time4pm = $("#4PM");
var time5pm = $("#5PM");

timeElArr = [time9am, time10am, time11am, time12pm, time1pm,
            time1pm, time2pm, time3pm, time4pm, time5pm];

function timeUpdate() {
    var today = dayjs();

    $('#currentDay').text(today.format("dddd, MMMM DD YYYY, h:mm.ss"));

    var current = dayjs().format('HH');
    for (let i = 0; i < timeElArr.length; i++){
        timeElArr[i].removeClass("future", "past", "present");
        if (current > timeElArr[i].data('hour')) {
            timeElArr[i].addClass("past");
        }else if (now === timeElArr[i].attr('data-hour')) {
            timeElArr[i].addClass("present");
        }else {
            timeElArr[i].addClass("future");
        }
    }
  }

// saving to local storage/rendering saved items
var saveBtn = $(".saveBtn");

function Submit(event) {
    event.preventDefault();
    
    var btnClicked = $(event.currentTarget);
    var textTarget = btnClicked.siblings("textarea")

}


// calling functions
timeUpdate();
setInterval(timeUpdate, 1000); //update time every 1000 ms


