const allToggle=document.querySelectorAll('.toggle')
const time=document.querySelector('#time')
const energy=document.querySelector('#energy')
const money=document.querySelector('#money')
allToggle.forEach(toggle => toggle.addEventListener('change',(e) => doTheTrick(e.target)))
function doTheTrick(theClickedOne){
  if(time.checked && energy.checked && money.checked){
    if(time===theClickedOne){
      money.checked=false
    }
    if(energy===theClickedOne){
      time.checked=false
    }
    if(money===theClickedOne){
      energy.checked=false
    }
  }
}
