import { gsap } from "gsap";

export default class Calculate {
  constructor(averagetemp) {
    let averagetempLength = averagetemp.length;
    for (let i = 0; i < averagetempLength; i++) {
      gsap.to(document.querySelectorAll("#childCon > .maps" + i), {
        duration: 3,
        scaleY: (averagetemp[i] / 10).toFixed(2),
        transformOrigin: "bottom",
        ease: "elastic.out(1, 0.3)",
      });

      let bgCol = "#b4e0eb";

      if (averagetemp[i] >= 10 && averagetemp[i] < 20) {
        bgCol = "#F2A922";
      } else if (averagetemp[i] >= 20) {
        bgCol = "#F27F1B";
      }

      document.querySelector("#childCon > .maps" + i).style.backgroundColor =
        bgCol;
    } // END Loop
  } // END constructor
}
