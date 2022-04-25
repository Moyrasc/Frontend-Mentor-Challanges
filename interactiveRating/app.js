const ratings = document.querySelectorAll(".circle");
const btn = document.querySelector("#btn");
const span = document.querySelector(".rating");
const evaluation = document.querySelector(".evaluation");
const thankyou = document.querySelector(".thankyou");
const card = document.querySelector(".card")


let counter = 0;

evaluation.addEventListener("click", elem =>{

    if(elem.target.classList.contains("circle")){

    ratings.forEach(rating =>{
        rating.classList.remove("active")
        
    }) 
    
    elem.target.classList.add("active");
    //console.log(elem.target.textContent)
    
    
    counter = elem.target.textContent;
    
}
})
btn.addEventListener("click", ()=>{
    if(counter !=0){
    card.style.display = "none"
    evaluation.style.display = "none"
    thankyou.style.display ="block"
    span.textContent = `You selected ${counter} out of ${ratings.length}` 
    }
})




