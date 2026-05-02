const enter = document.getElementById("enter")
const video=document.getElementById("video")
const audio=document.getElementById("audio")
const cursor=document.querySelector(".cursor")

let mouseX=0
let mouseY=0
let currentX=0
let currentY=0

document.addEventListener("mousemove",e=>{
  mouseX=e.clientX
  mouseY=e.clientY
})

function animate(){
  currentX+=(mouseX-currentX)*0.12
  currentY+=(mouseY-currentY)*0.12
  cursor.style.left=currentX+"px"
  cursor.style.top=currentY+"px"
  requestAnimationFrame(animate)
}

animate()

document.querySelectorAll("a, .btn, .codebox").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.4)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

enter.addEventListener("click",()=>{
  enter.classList.add("hidden")
  video.classList.add("show")
  video.play()
  audio.volume=0.4
  audio.play()
})

document.getElementById("dc").onclick=()=>window.open("https://discord.com/users/1443089229679951973","_blank")
document.getElementById("gh").onclick=()=>window.open("https://github.com/zzylenn","_blank")
document.getElementById("rb").onclick=()=>window.open("https://roblox.com/users/3116923731/profile/","_blank")
document.getElementById("st").onclick=()=>window.open("https://steamcommunity.com/id/zzylenn/","_blank")

document.querySelectorAll(".icon").forEach(btn=>{
  btn.addEventListener("mousemove",e=>{
    const r=btn.getBoundingClientRect()
    btn.style.setProperty("--x",`${e.clientX-r.left}px`)
    btn.style.setProperty("--y",`${e.clientY-r.top}px`)
  })
})
