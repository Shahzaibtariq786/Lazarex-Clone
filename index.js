function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl= gsap.timeline()
    tl.to(".nav-bottom",{
        height:"22vh"
    })
    tl.to(".nav-part-2 h5",{
        display:"block",
        // y:25,
        // stagger:0.1
    })
    tl.to(".nav-part-2 h5 span",{
        display:"initial",
        y:25,
        // duration:0.4,
        stagger:{
            amount:1.1
        }
    })
})
nav.addEventListener("mouseleave",function(){
    let tl= gsap.timeline()
    tl.to(".nav-part-2 h5 span",{
        display:"none",
        y:25,
        // duration:0.4,
        stagger:{
            amount:0.6
        }
    })
    tl.to(".nav-part-2 h5",{
        display:"none"
    })
    tl.to(".nav-bottom",{
        height:0,
        duration:0.2
    })
})
}
navAnimation()
function imageMover(){
    var rightElems = document.querySelectorAll(".page-2-right-elem")
rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity: 0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-120,
            y:dets.y - elem.getBoundingClientRect().y-100
        })
    })
})
}
imageMover()
function page3VideoAnimation(){
    var page3Center = document.querySelector(".page-3-center")
var video = document.querySelector(".page-3 video")
page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1.3) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
    video.pause(),
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}
page3VideoAnimation()
function sectionAnimation(){
    var section = document.querySelectorAll(".sec-right")
section.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
        elem.childNodes[3].style.height = "88%"
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})
}
sectionAnimation()
function AiVideoAnimation(){
    var page7 = document.querySelectorAll(".p2-left")
page7.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[7].style.opacity = 1
        elem.childNodes[7].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[7].load()
        elem.childNodes[7].style.opacity = 0
    })
})
var p2Right = document.querySelectorAll(".p2-right")
p2Right.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[7].style.opacity = 1
        elem.childNodes[7].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[7].load()
        elem.childNodes[7].style.opacity = 0
    })
})
}
AiVideoAnimation()
function listAnimation(){
    gsap.from(".btm10-parts h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".btm10-parts",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
}
listAnimation()