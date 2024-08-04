



const myObserver= new IntersectionObserver( (entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
    entry.target.classList.add("show")
}
else{
    entry.target.classList.remove("show")
}
})
})

const conteiner3= document.querySelector(".conteiner-3")

conteiner3.forEach((conteiner3)=>myObserver.observe(conteiner3));


myObserver.observe(conteiner3)