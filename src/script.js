function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  

  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
locoScroll()

let tl = gsap.timeline();

gsap.from('#line1-part1',{
  opacity:0,
  delay:0.25
})
gsap.from('#line1-part1 h5',{
  color:'red',
  duration:2,
  onStart:function(){
    let text = document.querySelector("#line1-part1 h5");
    let grow = 0;
      setInterval(function () {
      if (grow < 100) {
        grow += 1;
        let count = (text.innerHTML = grow);
        console.log(count);
      } else {
        grow = 100;
      }
    }, 28);
    
  }
  
})


tl.from(".line h1", {
  y: 150,
  stagger: 0.42,
  duration: 0.45,
});
tl.from('#loader span h1',{
  y: 150,
  opacity:0,
})

tl.from('.wait',{
  y:100,
  opacity:0,
  duration:0.5,
})

tl.to("#loader", {
  opacity: 0,
  duration: 1,
  delay: 1,
  display: "none",
});

tl.from("#page1", {
  ease: Power4,
  duration: 0.8,
  y: 1200,
  overflow:'hidden',
});
tl.from('#hero1 h1, #hero2 h1, #hero3 , #hero4',{
  y:350,
  stagger:0.2
})
tl.from('#nav',{
  opacity:0,
  y:-100,
  duration:0.2
})
gsap.to('#loader span h1',{
  color:'#EA213A',
})


const footer = document.querySelector('.footer-heading'); 
const footerSpans = document.querySelectorAll('.footer-heading span'); 

footer.addEventListener('mouseenter', () => {
  gsap.to(footerSpans, {
    duration: 0.2,
    stagger: 0.04,
    ease: 'power1.inOut',
    css: {
      fontFamily: 'Silk Serif, sans-serif', // Include a fallback font
      webkitTextStroke: '0.8px #fff',
      color: 'transparent',
      fontWeight: '400'
    }
  });
});

footer.addEventListener('mouseleave', () => {
  gsap.to(footerSpans, {
    duration: 0.2,
    stagger: 0.04,
    ease: 'power1.inOut',
    css: {
      fontFamily: 'Plain Light, sans-serif', // Include a fallback font
      webkitTextStroke: '0px',
      color: '#fff',
      fontWeight: '400'
    }
  });
});

document.addEventListener('mousemove',function(dets){
  gsap.to('#crsr',{
    left:dets.x,
    top:dets.y,
    duration:0.2,
  })
})

// document.addEventListener('mousemove',function(dets){
//   gsap.to('#video-cursor',{
//     left:dets.x,
//     top:dets.y,
//     duration:0.2,
//   })
// })

function sherryEffect(){
  Shery.makeMagnet("#nav-part2 h4,svg,i",{});
  Shery.imageEffect(".image-div", {
    style: 5 /*OR 5 for different variant */,
    debug: true,
    config:
      {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6849075336197595},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
      gooey:true,
  });
}
sherryEffect();