/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

 const buildTable = (len1,len2)=>{
    const table = []
    
    for(let r = 0;r<len1+1;r++){
        table[r] = []
        for(let c = 0;c<len2+1;c++){
            table[r].push(0)
        }
    }
    
    for(let r = 0;r<table.length;r++){
        table[r][0] = r
        for(let c = 0;c<table[r].length;c++){
            table[0][c] = c
        }
    }
    
    return table
}
var minDistance = function(word1, word2) {
    const table = buildTable(word1.length, word2.length)
    
    for(let r = 1; r < table.length;r++){
        for(let c = 1; c<table[r].length;c++){
            if(word1[r-1] === word2[c-1]){
                table[r][c] = table[r-1][c-1]
            }else{
                table[r][c] = 1 + Math.min(table[r-1][c], table[r][c-1], table[r-1][c-1])
            }
        }
    }
    
    return table[table.length-1][table[0].length-1]
};