
let saveEl = document.getElementById("save-el")
let counter = document.getElementById("counter")
let saveBtn = document.getElementById("save-btn") 
let count = 0

function increment() {
    count += 1
  counter.innerText = count
    console.log(count)
}

 
function save() {
   let number = count + " - " 
   saveEl.textContent += number 
   console.log(count)
   counter.textContent = 0
   count = 0
  }




