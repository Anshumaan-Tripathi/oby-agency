let tl = gsap.timeline();

// gsap.delayedCall(5, function() {
//   gsap.to(window, {
//     scrollTo: { y: 0 },  // Scroll to the top
//     duration: 0.8,
//     ease: "power4.out"
//   });
// });
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
    }, 22);
    
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
  delay: 1.2,
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

Shery.makeMagnet("#nav-part2 h4",{});