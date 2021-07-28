gsap.registerPlugin(ScrollTrigger);

let dur = 2.5;
const tl = gsap.timeline();
document.querySelector("#action").addEventListener("click", doCoolStuff);

tl.from("#masterTextPath", {
  duration: dur,
  attr: { startOffset: "30%" },
  ease: "power1.inOut"
});
tl.from("#masterTextPath", { duration: dur, attr: { startOffset: "30%",textLength: 1200 } }, 0);

tl.reversed(true)

function doCoolStuff() {
    // document.querySelector("#masterTextPath").textContent = "Mua sản phẩm và đặt biệt."
  tl.reversed(!tl.reversed());
}




//   var action = gsap.timeline({defaults: {duration: 1},
//     scrollTrigger: {
//       trigger: "#svg",
//       scrub: true,
//       start: "top center",
//       end: "bottom center"
//     }})
//   .from("#test", {drawSVG: 0}, 0)
  
//   .add(tl, 0);
// gsap.to()
// gsap.to("#test", {
//     duration:8, 
//     x: () => '+=$(document.querySelector(.square).offsetHeight)',
//     ease:"linear", 
//       scrollTrigger: {
//         trigger:"#test",
//         markers:true,
//         start:"top 75%", //when top of herman passes 75% viewport height
//         end:"top 25%", //when bottom of herman passes 25% viewport height
//         scrub: 4,
//              //events: onEnter onLeave onEnterBack onLeaveBack
//         toggleActions:"restart none none none"
//             //options: play, pause, resume, reset, restart, complete, reverse,none
//       }
//   }) 


// console.clear();

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
// gsap.defaults({ease: "none"});

// gsap.set(".ball", {xPercent: -50, yPercent: -50})

// var tl = gsap.timeline({
//   defaults: {
//     duration: 0.05, 
//     autoAlpha: 1, 
//     scale: 2, 
//     transformOrigin: 'center', 
//     ease: "elastic(2.5, 1)"
//   }})
// .to(".ball02, .text01", {}, 0.2) 
// .to(".ball03, .text02", {}, 0.33)
// .to(".ball04, .text03", {}, 0.46)

// var action = gsap.timeline({defaults: {duration: 1},
//   scrollTrigger: {
//     trigger: "#svg",
//     scrub: true,
//     start: "top center",
//     end: "bottom center"
//   }})
// .to(".ball03", {duration: 0.01, autoAlpha: 1})
// .from(".theLine", {drawSVG: 0}, 0)

// .add(tl, 0);


 var App = {
    drawsvg: function () {
        if($('#line-about').length){
            var $duration = $('#line-about').height();
            function pathPrepare ($el) {
                console.log($el);

                var lineLength = $el[0].getTotalLength();
                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength);
            }

            var $line1 = $("path#l_cp");
            var $line2 = $("path#line2");
            var $line3 = $("path#line3");
            var $line4 = $("path#line4");
            var $line5 = $("path#line5");
            var $line6 = $("path#line6");

            // prepare SVG
            // pathPrepare($text_1);
            pathPrepare($line1);
            pathPrepare($line2);
            pathPrepare($line3);
            pathPrepare($line4);
            pathPrepare($line5);
            pathPrepare($line6);

            // init controller
            var controller = new ScrollMagic.Controller();

            // build tween
            var tween = new TimelineMax()
                .add(TweenMax.to($line1, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
                .add(TweenMax.to($line2, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
                .add(TweenMax.to($line3, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
                .add(TweenMax.to($line4, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
                .add(TweenMax.to($line5, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
                .add(TweenMax.to($line6, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
                .add(TweenMax.to("path", 1, {stroke: "#ffffff", ease:Linear.easeNone}), 0);			// change color during the whole thing

            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: "#line-about",duration: $duration,start:"top 75%", tweenChanges: true,})
                .setTween(tween)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            // build tween
            var text = TweenMax.from("#a textPath", 2, {startOffset: '30%' , ease: Power1.inOut});
            // var secondimg = TweenMax.from(".img_second img", 2, {rotation: 90, ease: Linear.easeNone});
            // var thirdimg = TweenMax.from(".img_third img", 2, {rotation: -100, ease: Linear.easeNone});

            // // build scene
            // var rotateimg1 = new ScrollMagic.Scene({triggerElement: "#mainText", duration: 400, tweenChanges: true,})
            //     .setTween(text)
            //     .addIndicators() // add indicators (requires plugin)
            //     .addTo(controller);
            // var rotateimg2 = new ScrollMagic.Scene({triggerElement: "#line2", duration: 400})
            //     .setTween(text)
            //     .addIndicators() // add indicators (requires plugin)
            //     .addTo(controller);
            // var slideimg3 = new ScrollMagic.Scene({triggerElement: ".img_third", duration: 150, offset: -50})
            //     .setTween(thirdimg)
            //     .addIndicators() // add indicators (requires plugin)
            //     .addTo(controller);
        }
    },
};
jQuery(document).ready(function () {
    App.drawsvg();
})