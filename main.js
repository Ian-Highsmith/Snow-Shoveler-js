let inchesOfSnow = 8;
let snowInFeet = inchesOfSnow/12;

let width = 8;
let length = 20;
let cubicFeet = width * length * snowInFeet;

let total = 0;

if (0 <= cubicFeet && cubicFeet < 50) {
  total = 20;
} else if (50 <= cubicFeet && cubicFeet < 150) {
  total = 50;
} else if (150 <= cubicFeet && cubicFeet < 300) {
  total = 100;
} else {
  total = 150;
}

let message = "Cubic Feet: " + cubicFeet + "<br \\> Quote Price: $" + total;

let elem = document.getElementById("main")
elem.innerHTML = message;
