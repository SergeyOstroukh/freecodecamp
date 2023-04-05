function fakeBin(x) {
  let res = "";
  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i]) < 5) {
      res += 0;
    } else {
      res += 1;
    }
  }
  return res;
}
let str = "1,4,5,6,7,8,2";
console.log(fakeBin(str));
