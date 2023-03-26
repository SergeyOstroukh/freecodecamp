function accum(str) {
    const letters = str.split('');
    let strings = [];
    for(let pos = 0; pos < letters.length; pos++) {
        let s = '';
        let letter = letters[pos].toLowerCase();
        for (let i = 0; i < pos; i++) {
            s += letter;
        }
        s = letter.toUpperCase() + s;
        strings.push(s);
    }
    return strings.join('-');
}
console.log(accum('abra'))