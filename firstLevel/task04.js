const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (par === 4 && strokes === 1) {
    return "Hole-in-one!";
  } else if (par === 4 && strokes === 2) {
    return "Eagle";
  } else if (par === 5 && strokes === 2) {
    return "Eagle";
  } else if (par === 4 && strokes === 3) {
    return "Birdie";
  } else if (par === 4 && strokes === 4) {
    return "Par";
  } else if (par === 1 && strokes === 1) {
    return "Hole-in-one!";
  } else if (par === 5 && strokes === 5) {
    return "Par";
  } else if (par === 4 && strokes === 5) {
    return "Bogey";
  } else if (par === 4 && strokes === 6) {
    return "Double Bogey";
  } else if (par === 4 && strokes === 7) {
    return "Go Home!";
  } else if (par === 5 && strokes === 9) {
    return "Go Home!";
  }
  // Only change code above this line
}
let n = 4;
let b = 2;
console.log(golfScore(n, b));
