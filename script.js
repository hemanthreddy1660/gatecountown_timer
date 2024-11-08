const days_el = document.getElementById('days');
const hours_el = document.getElementById('hours');
const mins_el = document.getElementById('minutes');
const sec_el = document.getElementById('seconds');
const newyear = "1 Feb 2025";
function countdown(){
    const newyeardate = new Date(newyear);
    const currentdate = new Date();
    const seconds = (newyeardate-currentdate)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const mins = Math.floor(seconds/60)%60;
    const sec = Math.floor(seconds)%60;
    days_el.innerHTML = formattime(days);
    hours_el.innerHTML = formattime(hours);
    mins_el.innerHTML = formattime(mins);
    sec_el.innerHTML = formattime(sec);
}
function formattime(time){
    return time<10 ? `0${time}`:time;
}
countdown();
setInterval(countdown,1000);