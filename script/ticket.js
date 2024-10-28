document.addEventListener("click", names);

function setColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}

function names(event) {
  const innText = event.target.firstChild.nodeValue;

  setColor(innText);
}
function setValue(elementId) {
  const element = document.getElementById(elementId);
  const one = document.getElementById("one");

  const text = element.innerText;
  one.innerText = text;
  const priceOne =document.getElementById('price-1')
  priceOne.innerText=550
  
  
}

document.addEventListener("click", table);

function table(event) {
  const innText = event.target.firstChild.nodeValue;
  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const three = document.getElementById("three");
  const four = document.getElementById("four");

  
  const priceTwo =document.getElementById('price-2')
  const priceThree =document.getElementById('price-3')
  const priceFour =document.getElementById('price-4')
  // let count = 0;
  // let button = document.getElementById("seat");
  setValue(innText);

  function seatCount() {
    button.addEventListener("click", function () {
      const counts = count++;

      const final = parseInt(counts);
      // console.log(final);

      if (counts == 2) {
        two.innerText = innText;
        priceTwo.innerText=550
      } else if (counts == 5) {
        three.innerText = innText;
        priceThree.innerText=550
      } else if (counts == 9) {
        four.innerText = innText;
        priceFour.innerText=550
      
      } 
    });
  }

  seatCount();
}

// function seatCount(){
//   button.addEventListener("click", function () {
//     const counts = count++;

//     console.log(counts)
//   })

// }

document.addEventListener("click", remove);

function remove(event) {
  const innText = event.target.firstChild.nodeValue;

  let count = 0;
  let button = document.getElementById("seat");

  button.addEventListener("click", function () {
    const counts = count++;

    // console.log(number);
    if (counts > 2 || counts > 3 || counts > 4 || counts > 5 || counts > 6) {
      removeBackground(innText);
    }
  });

  // console.log(innText);
}

let count = 0;

let button = document.getElementById("seat");
let countDisplay = document.getElementById("count");
let formSeat = document.getElementById("form-seat");

button.addEventListener("click", function () {
  let sum1 = 0;
  count++;
  console.log(count);
  if (count ==1){
    
    sum1 = 1*550;
    const totalPrice =document.getElementById('total-price');
    totalPrice.innerText =sum1
    console.log(sum1)

  }else if(count==2){
    sum1 = 2*550;
    const totalPrice =document.getElementById('total-price');
    totalPrice.innerText =sum1

  }else if(count==4){
    sum1 = 3*550;
    const totalPrice =document.getElementById('total-price');
    totalPrice.innerText =sum1

  }else if(count==7){
    sum1 = 4*550;
    const totalPrice =document.getElementById('total-price');
    totalPrice.innerText =sum1;
    const couponSection =document.getElementById('coupon-section');
    couponSection.classList.remove('hidden')
    const grandSection =document.getElementById('grand-total');
    grandSection.classList.remove('hidden')
    
    const coup = document.getElementById('coupon');
    const coupText = coup.value;
    console.log(coupText)
    const coupCodeM ='MessiGay';
    const coupCodeR ='CR7BOSS';
    console.log(coupCodeM)
    if(coupText ===coupCodeM){
      const apply =document.getElementById('apply-btn');
      apply.removeAttribute('disabled')
      sum1=1870;
      const grandPrice =document.getElementById('grand-price');
      grandPrice.innerText =sum1;
      console.log(sum1)
      

    }else if(coupText === coupCodeR ){
      const apply =document.getElementById('apply-btn');
      apply.removeAttribute('disabled')
      sum1=1760;
      const grandPrice =document.getElementById('grand-price');
      grandPrice.innerText =sum1;


    }else{
      const apply =document.getElementById('apply-btn');
      apply.setAttribute('disabled')

    }
    
    

  }


  let sum = 40;
  sum = sum - count;
  // console.log(sum);
  countDisplay.innerHTML = sum;
  formSeat.innerHTML = count;
  if (count > 5) {
    formSeat.innerHTML = 0;
  }else if(count>=1){
    const nextBtn =document.getElementById('next-btn');
    nextBtn.removeAttribute('disabled')
  }
});
function removeBackground(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#1DD100]");
  console.log(element.classList);
}

function successSection(){
  const header =document.getElementById('header')
  header.classList.add('hidden')
  const main = document.getElementById('main')
  main.classList.add('hidden')
  const footer =document.getElementById('footer');
  footer.classList.add('hidden')
  const success =document.getElementById('success-section');
  success.classList.remove('hidden')

}












// function removeAttribute(elementId){
//   const element =document.getElementById(elementId);
//   element.removeAttribute(disabled);

// }

