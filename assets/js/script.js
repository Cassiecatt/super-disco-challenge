

// saving description when user clicks save button
$(document).ready(function() {
    var btnArray = $(".saveBtn");
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









