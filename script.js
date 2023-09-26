const scroll=new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function vcanimation(){
    var vc=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")
vc.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

vc.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

vc.addEventListener("mousemove",function(a){
    gsap.to(playbtn,{
        left:a.x-70,
        top:a.y-270
    })
})
}

vcanimation()

function loadinganime(){
    gsap.from("#page1 h1",{
        y:30,
        opacity:0,
        delay: 0.5,
        duration:0.9,
        stagger:0.3
    } )

    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5
    } )
    
    
    
}

loadinganime()