//DATE & CURRENT TIME
var todayDate = function () {
    var date = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").html(date);

}
setInterval(todayDate);
// saveBtn (button) click listener 
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save information in local storage
    localStorage.setItem(time, text);
})

$(document).ready(function () {
    // Information in Local Storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();

function timeTracker() {
// CURRENT TIME & TIMEBLOCK LOOPS
var time = moment().hour();
$(".row").each(function () {
    var hour = parseInt($(this).attr("id").split("hour")[1]);
    if (time < hour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future'); }
    else if (time > hour) {
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past'); }
    else { 
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future'); }
})}
});



