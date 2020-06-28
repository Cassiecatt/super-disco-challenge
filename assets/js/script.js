

// save description to local storage when user clicks save button
$(document).ready(function() {
    var btnArray = $(".saveBtn");
    // console.log(btnArray);
    btnArray.each(function(index) {
      // by default, index starts at 0. We need to start it at 9
      var myIndex = index;
      myIndex = myIndex + 9;
      // We are adding the click event listener to each element in our btnArray
      $(this).click(function() {
        var textvalue = $("#data-" + myIndex).val();
        localStorage.setItem("hour-" + myIndex, textvalue);
      });
    });
    for (var i = 9; i <= 18; i++) {
      // Get data from local storage and display on the webpage
      var textvalue = localStorage.getItem("hour-" + i);
      $("#data-" + i).val(textvalue); //how to change value of elements in jquery; data is where we want to put the data
    }
  });

// Pushing date into empty P tag in Jumbotron
var currentDate = moment().format("dddd, MMMM, Do, YYYY");
//console.log(currentDate);
$("#currentDay").text(currentDate);


// function - change color based on past present and future
function checkIfTimePassed() {
    var currentHour = moment().hours();
    $(".time-block > textarea").each(function(){
        var hour = parseInt($(this).attr("id").split("-")[1]);
        if (hour < currentHour) {
            $(this).addClass("past");
        }
        else if (hour === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    });
  }
  checkIfTimePassed()








// // function - change color based on past present and future
// function checkIfTimePassed() {
//     //variables
//     let hours = $(".hour") //selecting div with (ex 9AM, etc)
//     let hour = moment().hour() // current hour
//     let ids = $(".description") // selecing textarea with descritpion class
   
//     $(".time-block > textarea").each(function(){
//         var blockHour =
//     })


//     for (let i = 0; i < ids.length; i++) {
//         var times = ids[i].getAttribute("id").split("-")[1]
//         //console.log(ids[i].getAttribute("id").split("-")[1]);
//         if(times < hour) {
//             ids[i].classList.add("past");
//         }
//         else if (times === hour) {
//             ids[i].classList.remove("past");
//             ids[i].classList.add("present");
//         }
//         else {
//             ids[i].classList.remove("past");
//             ids[i].classList.remove("present");
//             ids[i].classList.add("future");
//         }

//     }
// }
// checkIfTimePassed();

