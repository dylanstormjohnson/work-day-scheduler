// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.\
// console.log("hit") TEST
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').on('click', function() {
    let thingToDo = $(this).siblings(".description").val();
    let timeToDoBy = $(this).parent().attr("id");
    localStorage.setItem(timeToDoBy, thingToDo);
    // let things = localStorage.getItem(timeToDoBy) TEST
    // console.log(things) TEST
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  potentialDeadlines = [9, 10, 11, 12, 13, 14, 15, 16, 17]

  function deadlineChecker() {
    let now = dayjs().hour();
    let timer = $(".time-block")


    for (var i = 0; i < potentialDeadlines.length; i++) {
      if (potentialDeadlines[i] < now) {
        timer.eq(i).children('textarea').addClass('past');
      } else if (potentialDeadlines[i] === now) {
        timer.eq(i).children('textarea').addClass('present');
      } else {
        timer.eq(i).children('textarea').addClass('future');
      }
    }

  }

  deadlineChecker()

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));

  $('#hour-10 .description').val(localStorage.getItem('hour-10'));

  $('#hour-11 .description').val(localStorage.getItem('hour-11'));

  $('#hour-12 .description').val(localStorage.getItem('hour-12'));

  $('#hour-1 .description').val(localStorage.getItem('hour-1'));

  $('#hour-2 .description').val(localStorage.getItem('hour-2'));

  $('#hour-3 .description').val(localStorage.getItem('hour-3'));

  $('#hour-4 .description').val(localStorage.getItem('hour-4'));

  $('#hour-5 .description').val(localStorage.getItem('hour-5'));

  // TODO: Add code to display the current date in the header of the page.
  let currentDateAndTime = dayjs().format('MMMM D, YYYY h:mm A');
  let dateAndTime = document.getElementById('currentDay');

  dateAndTime.textContent = currentDateAndTime;
  function displayTime() {
  var timeInterval = setInterval(function () {
    currentDateAndTime = dayjs().format('MMMM D, YYYY h:mm A');
    dateAndTime.textContent = currentDateAndTime;
  }, 1000);
  ;}
  displayTime();
});
