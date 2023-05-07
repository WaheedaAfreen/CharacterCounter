const textarea =document.getElementById("textarea");
const TotalCounter=document.getElementById("TotalCounter");
const RemainingCounter=document.getElementById("RemainingCounter");

textarea.addEventListener("keyup", ()=>{

    updateCounter()
})
function  updateCounter(){
    TotalCounter.innerText = textarea.value.length

    RemainingCounter.innerText = textarea.getAttribute
    ("maxlength") - textarea.value.length;
}