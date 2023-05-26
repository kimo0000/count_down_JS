const date = document.querySelector('#date')
const timerFunct = document.querySelector('.timer')
let sec = document.querySelector('#seconde')
let min = document.querySelector('#minute')
let hou = document.querySelector('#hour')
let da = document.querySelector('#day')
let timer  = null

console.log(sec)
console.log(min)
console.log(hou)
console.log(da)

const dateNow = new Date()
console.log(dateNow)

const getMonths = ["Janvier", "Fevrier", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const getDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

const dat = getDays[dateNow.getDay()]
const days = dateNow.getDate()
const month = getMonths[dateNow.getMonth()]
const years = dateNow.getFullYear()
const hours = dateNow.getHours()
const minutes = dateNow.getMinutes()

console.log(days, month, years, hours, minutes)
date.innerHTML = `${dat}, ${days} ${month} ${years}, ${hours}:${minutes} am`

let second = 59
let minute = 59
let hour = 24
let day = 9

let lastSecond
let lastMinute
let lastHour
let lastDays

function timeNow() {
   second--
   if(second === 0) {
     second = 59
     minute--
    }
    if(minute === 0) {
       minute = 59
       hour--
    }
     if(hour === 0) {
        hour = 24
        day--
     }

    if(second < 10) {
       lastSecond = `0${second}`
    } else {
        lastSecond = `${second}`
    }

    if(minute < 10) {
       lastMinute = `0${minute}`
    } else {
        lastMinute = `${minute}`
    }

    if(hour < 10) {
       lastHour = `0${hour}`
    } else {
      lastHour = `${hour}`
    }

    if(day < 10) {
       lastDays = `0${day}`
    } else {
       lastDays = `${day}`
    }

     sec.innerHTML = lastSecond
     min.innerHTML = lastMinute
     hou.innerHTML = lastHour
     da.innerHTML = lastDays
    
    if(day === 0) {
       clearInterval(timer)
       timerFunct.innerHTML = "<p class='finish_time'>Time Offert Is Finish!</p>"
     }
}

timer = setInterval(timeNow, 1000)
