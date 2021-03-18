gsap.fromTo('#leftbg',{y:-800,opacity:0},{duration:1,ease:'expo.InOut',opacity:1,y:0});
gsap.fromTo('#rightbg',{y:800,opacity:0},{duration:1,ease:'expo.InOut',opacity:1,y:0});

gsap.fromTo('#overlay',{scale:1.5,opacity:0},{delay:2,duration:1,ease:'expo.InOut',scale:1,opacity:1});
gsap.fromTo('#oleft',{y:200,opacity:0},{delay:2.1,duration:1,ease:'expo.InOut',opacity:1,y:0});
gsap.fromTo('#oright',{x:200,opacity:0},{delay:2.4,duration:1,ease:'expo.InOut',opacity:1,x:0});

gsap.fromTo('#btmo',{y:200,opacity:0},{delay:2.6,duration:1,ease:'expo.InOut',opacity:1,y:0});
gsap.fromTo('#oright #mido #midleft',{x:-200,opacity:0},{delay:2.6,duration:1,ease:'expo.InOut',opacity:1,x:0});
gsap.from('#oright #mido #midleft #text .txt',{stagger:.3,opacity:0,delay:4.6,duration:1,ease:'expo.InOut'});

gsap.fromTo('#oright #mido #midright h3',{x:200},{delay:4.6,duration:1,ease:'expo.InOut',x:0});
gsap.fromTo('#oright #mido #midright h1',{x:800},{delay:4.8,duration:1,ease:'expo.InOut',x:0});
