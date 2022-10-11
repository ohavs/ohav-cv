let soundCloudInput=document.getElementById("soundCloud")
let soundCloudPlayer=document.querySelector(".soundCloudPlayer")

soundCloudInput.addEventListener("click",()=>{
soundCloudPlayer.classList.toggle("hidden")
soundCloudPlayer.classList.toggle("bounceIn")
})


