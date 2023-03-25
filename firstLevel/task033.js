function countChars_long(str) {
    var result = {};
    var chars = str.split("");
    for (var i = 0; i < chars.length; i++) {
      var count = result[chars[i]]? result[chars[i]] : 0;
      result[chars[i]] = count + 1; 
    }
    return result;
  }
  
//   function countChars_short(str) {
//     return str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
//   }
  
  console.log(countChars_long("aabbaccd"));
//   console.log(countChars_short("aabbaccd"));