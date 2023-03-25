function duplicate_str(text) {
    let duplicates = {};
    let char = text.split("");
    for (let i = 0; i < char.length; i++){
        if(duplicates[char[i]]){
            duplicates[char[i]]++; 
        }else{
            duplicates[char[i]] = 1
        }
    }
    for (key in duplicates){
        if (duplicates[key]>1){
            console.log(`элемент ${key} встречается ${duplicates[key]} раз`)
        }
    } 
}
console.log(duplicate_str('aabbcdde')); 