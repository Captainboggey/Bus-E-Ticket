document.addEventListener("click", names);

function setColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}

function names(event) {
  const innText = event.target.firstChild.nodeValue;

  // console.log(innText)

  setColor(innText);
}

document.addEventListener("click", remove);

function remove(event) {
  const innText = event.target.firstChild.nodeValue;
  
  let count = 0;
  let button = document.getElementById("seat");
  
  button.addEventListener("click", function () {
  const counts = count++;
  const number = parseInt(counts);
 
  console.log(number);
   if(counts>2 || counts>3||counts>4||counts>5||counts>6){
    removeBackground(innText)
    
    
   }
  
  
   
    

  
});


console.log(innText);
}

let count = 0;
let button = document.getElementById("seat");
let countDisplay = document.getElementById("count");
let formSeat = document.getElementById("form-seat");

button.addEventListener("click", function () {
  count++;

  let sum = 40;
  sum = sum - count;
  // console.log(sum);
  countDisplay.innerHTML = sum;
  formSeat.innerHTML = count;
  if (count > 4) {
    formSeat.innerHTML = 0;
  }
});
function removeBackground(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#1DD100]");
  console.log(element.classList)
}
