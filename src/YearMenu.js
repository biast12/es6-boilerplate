export default class YearMenu {
  constructor(data) {
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

    this.getchildYearCon.forEach((item) => {
      item.addEventListener("click", (event) => {
        for (let i = 0; i < getchildYearConlength; i++) {
          this.getchildYearCon[i].style.backgroundColor = "#36aad8";
        }

        event.currentTarget.style.backgroundColor = "#04658c";

        let currentTargetDataIndex = event.currentTarget.dataset.index;

        getDataFromIndex = data.temperature[currentTargetDataIndex].averageTemperature;
        data.month.map((item, index) => {
          document.querySelector("#temp" + index).innerHTML =
            getDataFromIndex[index];
        });
      });
    });
  } // END constructor
} // END class
