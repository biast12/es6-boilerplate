import { gsap } from "gsap";


/*
this.rotate = new Rotate({
  html: {
    elememt: <elememt name>,
    id: <id name>,
  },
  src: <image>,
  duration: <number>,
  useGsap: <true/false>,
});
*/

export default class Rotate {
  constructor(obj) {
    this.name = document.createElement(obj.html.elememt || "div");
    this.name.id = obj.html.id;
    this.img = document.createElement("img");
    this.img.src = obj.src;
    document.body.appendChild(this.name);
    this.name.appendChild(this.img);

    if (obj.useGsap) {
      gsap.to(this.name, {
        duration: obj.duration,
        rotation: "360",
        transformOrigin: "center",
        repeat: -1,
        ease: "linear"
      });
    } else {
      let cubeRotating = [
        { transform: "rotate(0deg)" },
        { transform: "rotate(360deg)" },
      ];
      let cubeTiming = {
        duration: obj.duration * 1000,
        iterations: Infinity,
      };
      this.name.animate(cubeRotating, cubeTiming);
    }
  } // END constructor
}
