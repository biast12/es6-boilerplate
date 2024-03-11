import Initialize from "./Initialize";
import Boxes from "./Boxes";
import Test from "./Test";

(function () {
  let condition = 1;

  if (condition === 1) {
    new Initialize();
  } else if (condition === 2) {
    new Boxes();
  } else if (condition === 3) {
    new Test();
  }
})();
