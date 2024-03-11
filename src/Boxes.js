//import "../css/style2.scss";
import data from "../assets/json/temp.json";

export default class Boxes {
  constructor() {
    this.container = document.createElement("article");
    this.container.id = "yearContainer";
    document.body.appendChild(this.container);

    this.container.innerHTML =
      "" +
      data.year
        .map((item, index) => {
          return `
          <div id="block" style=${"background-color:" + data.color[index]}>
            <img src="${"assets/img/" + data.img[index] + ".png"}"></img>
          </div>
      `;
        })
        .join("");
  } // END constructor
} // END class
