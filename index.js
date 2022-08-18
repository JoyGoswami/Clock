const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const toggleMenu = document.getElementsByClassName("nav-menu")[0]

toggleBtn.addEventListener("click", function(){
  toggleMenu.classList.toggle("active")
})

// ===================Clock=================
const hourEl = document.getElementById("hour-el")
const minuteEl = document.getElementById("minute-el")
const secondEl = document.getElementById("second-el")
const amPmEl = document.getElementById("ampm-el")

function showTime(){
  let ampms = "AM"
  let time = new Date()
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()

  if(hour>12){
    hour = hour - 12
  }

  if(hour>11.99){
    ampms = "PM"
  }

  if(hour<10){
    hour = "0" + hour
  } else if (minute<10) {
    minute = "0"+minute
  } else if (second<10) {
    second = "0" + second
  }

  hourEl.innerHTML = hour
  minuteEl.innerHTML = minute
  secondEl.innerHTML = second
  amPmEl.innerHTML = ampms

}


setInterval(showTime, 1000)
showTime()
