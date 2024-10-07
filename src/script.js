let tl = gsap.timeline();


gsap.from('#line1-part1',{
  opacity:0,
  delay:0.25
})
gsap.from('#line1-part1 h5',{
  color:'red',
  // delay:1,
  duration:2,
  OnStart:function(){
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
  // delay:0.2
})

tl.to("#loader", {
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
  display: "none",
});

tl.from("#page1", {
  ease: Power4,
  duration: 0.8,
  y: 1600,
});

