function findNextSquare(sq){
    let squareNum = Math.sqrt(sq);
    let nextPerfectoSquare = 0
    if(squareNum === Math.floor(squareNum)){
        nextPerfectoSquare = (squareNum + 1) ** 2;
        return nextPerfectoSquare
    }else
    return -1;
}
let num = 121;
console.log(`${num} -> ${findNextSquare(num)} `)
