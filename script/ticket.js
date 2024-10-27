


document.addEventListener('click',names)


function setColor(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]')
}

function names(event){
    
    const innText = event.target.firstChild.nodeValue;
    
   setColor(innText)

}

// function clicked(){
//     const textIn = names();
//     setColor(textIn)
// }