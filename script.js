var timeout;
const scroll = new LocomotiveScroll(
{
    el: document.querySelector('#main'),
    smooth: true
});


function firstpageanim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2
        
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}
function circlemousehover(xscale,yscale)
{
    window.addEventListener("mousemove",function(dets){
    document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)  scale(${xscale},${yscale})`;
    })
}

function circlechapta(){

    //Defining Default Scale Value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){

        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;
    
        circlemousehover(xscale,yscale);
             timeout =  setTimeout(function(){
            document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)  scale(1,1)`;
        },100);

    })
}

circlechapta();
circlemousehover();
firstpageanim();

document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var diffrot = 0 ;

    elem.addEventListener("mouseleave",function(dets){   
        gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,    
        duration:0.5,
        });
    });

    elem.addEventListener("mousemove",function(dets){   
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate: gsap.utils.clamp(-20,20,diffrot * 0.5),
        });
    });
});




  function realtimeClock() {
    
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = 
        hours + "  :  " + minutes + "  :  " + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}

