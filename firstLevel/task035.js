function findSmallestInt(args) {
  let res = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].length === 4) {
      res.push(args[i]);
    }
  }
  return res;
}

let array = ["afaa", "fafaf", "awwa", "aggaga"];
console.log(findSmallestInt(array));
