function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-p1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-p2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-p1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
          trigger: "#page3",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });

  }
  navbarAnimation()

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


function cursorAnimation(){
    document.addEventListener("mousemove",function(a){
        gsap.to("#cursor",{
            left:a.x,
            top:a.y,
        });
    });
    
    // document.querySelectorAll(".child").forEach(function (elm){
    //     elm.addEventListener("mouseenter",function(){
    //         gsap.to("#cursor",{
    //             transform: 'translate(-50%,-50%) scale(1)',
    //         });
    //     });
    //     elm.addEventListener("mouseleave",function(){
    //         gsap.to("#cursor",{
    //             transform:"translate(-50%,-50%) scale(0)",
    //         });
    //     });
    // });

    document.querySelector("#child1").addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                transform: 'translate(-50%,-50%) scale(1)',
                backgroundColor: "rgba(224, 139, 189, 0.814)"
            })
    })
    document.querySelector("#child1").addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })

    document.querySelector("#child2").addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                transform: 'translate(-50%,-50%) scale(1)',
                backgroundColor: "#dfed48d0"
            })
    })

    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })

    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: "#e0d08bd0"
        })
    })

    document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })

    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: "#f8b954d0"
        })
    })

    document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })


    
}

cursorAnimation();

