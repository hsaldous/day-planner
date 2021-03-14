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
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

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



