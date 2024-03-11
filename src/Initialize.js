import "../css/style.scss";
import mSun from "../assets/img/sun-big-white.png";
import data from "../assets/json/temperature.json";
import Rotate from "./Rotate";
import Calculate from "./Calculate";

export default class Initialize {
  constructor() {
    this.rotate = new Rotate({
      html: {
        elememt: "figure",
        id: "sun",
      },
      src: mSun,
      duration: 30,
    });

    this.yearContainer = document.createElement("div");
    this.yearContainer.id = "yearContainer";
    document.body.appendChild(this.yearContainer);
    this.yearContainer.innerHTML =
      "" +
      data.temperature
        .map((item, index) => {
          return `
           <div
           id="year"
           data-index=${index}>${item.year}</div>
           `; // END return
        })
        .join("");

    this.getchildYearCon = document.querySelectorAll("#yearContainer > #year");
    let getchildYearConlength = this.getchildYearCon.length;
    let getDataFromIndex = data.temperature[0].averageTemperature;

    this.getchildYearCon.forEach((item) => {
      item.addEventListener("click", (event) => {
        for (let i = 0; i < getchildYearConlength; i++) {
          this.getchildYearCon[i].style.backgroundColor = "#36aad8";
        }

        event.currentTarget.style.backgroundColor = "#04658c";

        let currentTargetDataIndex = event.currentTarget.dataset.index;

        getDataFromIndex =
          data.temperature[currentTargetDataIndex].averageTemperature;

        data.month.map((item, index) => {
          document.querySelector("#temp" + index).innerHTML =
            getDataFromIndex[index];
          this.cal = new Calculate(getDataFromIndex);
        });
      });
    });

    this.container = document.createElement("article");
    this.container.id = "container";
    this.container.className = "container";
    document.body.appendChild(this.container);

    this.container.innerHTML =
      "" +
      data.month
        .map((item, index) => {
          return `
          <div id="childCon">
            <section id="block" class = '${"maps" + index}'></section>
            <section class="temperature" id='${"temp" + index}'>
              ${data.temperature[0].averageTemperature[index]}
            </section>
            <section class="month">${data.month[index]}</section>
          </div>
      `;
        })
        .join("");

    this.cal = new Calculate(getDataFromIndex);
  } // END constructor
} // END class
