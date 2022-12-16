document.getElementById('text').innerHTML = "I have id name as text"
//2. Solutions

let htag = document.querySelector('h1');
htag.innerHTML = 'new h1 tag'



//3. Solutions
let newDiv = document.querySelector('.box')
newDiv.innerHTML = 'This Div contains classname as "box"'
//4.Solutions
let headTag = document.querySelectorAll("h1")[1];
headTag.textContent = "hello world"

// 5. solution
function changeFlexDriection() {
  let direction = document.querySelector('#flex-box');
  if (direction.style.flexDirection == "column") {
    direction.style.flexDirection = 'row';
  } else {
    direction.style.flexDirection = 'column';
  }

}
// 7.solution
let h1tag = document.querySelectorAll("h1")[2];
h1tag.setAttribute("id", "heading");
h1tag.style.color = "red"
//8.solution
document.querySelector("#replace-txt-btn").addEventListener('click', function () {
  document.querySelector("#changetxt").textContent = "Welcome to Elevation Academy"
})

//9.solution
function Time() {
  var date = new Date();
  var hrs = date.getHours();
  var minute = date.getMinutes();
  var seconds = date.getSeconds();

  document.querySelector("#hour").innerHTML = hrs
  document.querySelector("#min").innerHTML = minute
  document.querySelector("#sec").innerHTML = seconds

}
setInterval(Time, 1000)
Time();
// 10.solution
function value() {
  let sel = document.getElementById("years");
  let msg = sel.options[sel.selectedIndex].text;
  document.querySelector("#selectValue").innerHTML = msg;
}
document.querySelector("#selectBtn").addEventListener('click', function () {
  value();
})