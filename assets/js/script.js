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