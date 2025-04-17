import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = () => {
  useGSAP(() => {
    const child = document.querySelector(".child");

    const childWidth = child.scrollWidth;
    const scrollAmount = childWidth - window.innerWidth;

    const tween = gsap.to(child, {
      x: -scrollAmount,
      ease: "none",
      duration: 3,
    });
    const view = gsap.to(".child_2", {
      x:8,
      y:8,
      ease: "easeOut",
      duration: 5,
    });

    ScrollTrigger.create({
      trigger: ".parent",
      start: "top 20%",
      end: `+=${scrollAmount}`,
      pin: true,
      scrub: 1,
      animation: tween,
    });
    ScrollTrigger.create({
      trigger: ".view_image",
      start: "top 100%",
      end: " top bottom",
      scrub: true,
      pin: true,
      animation:view,
    });
  }, );
};

export default useScrollAnimation;

//   gsap.to(".child_2", {
//       y: -180,
//   ScrollTrigger:({
//     trigger: ".child_2",
//     start: "top 20%",
//     end: "0%",
//     pin: true,
//     scr33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333ub: 1,
//     animation: tween,
//   })
// });

// gsap.to(".child_2", {
//   y: -180,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".child_2",
//     start: "top 20%",
//     end:"0%"
//   },
// });
