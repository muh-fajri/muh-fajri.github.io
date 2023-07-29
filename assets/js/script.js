/* Scroll to Top */
btnTop = document.getElementById("toTop");
window.onscroll = function() {
    scroll()
};
const scroll = () => {
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}
const gotoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*-- Scroll to Top --*/

/* Show User Current Date */
let fullDate = new String();
let dayName = ("Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday");
dayName = dayName.split(",");
let monthName = ("January,February,March,April,May,June,July,August,September,October,November,December");
monthName = monthName.split(",");
let _date = new Date();
let day = _date.getDay();
let date = _date.getDate();
let month = _date.getMonth();
let year = _date.getFullYear();
fullDate = "Today: " + dayName[day] + ", " + date + " " + monthName[month] + " " + year;
document.querySelector("#date-time > p").innerHTML = fullDate;
/*-- Show User Current Date --*/