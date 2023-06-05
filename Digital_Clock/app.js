
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("secondes")
let amPm = document.getElementById("amPm")
setInterval(function(){
const date = new Date()
minutes.innerText=date.getMinutes()

let zone = "AM";
let hourValue=date.getHours()
if(hourValue>11){
    zone="PM"
    if(hourValue>12)
    hourValue -=12
}
amPm.innerText=zone
hours.innerText=hourValue
let secondsValue=date.getSeconds()
if (secondsValue<=9){
    seconds.innerText="0"+secondsValue
}
else{
    seconds.innerText=secondsValue
}
},1000)