/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const table = new Array(s.length+1).fill(false)
    
    table[0]=true
    
    for(let i = 0;i<table.length;i++){
        if(table[i]===false) continue
        for(let j = i +1; j<table.length;j++){
            if(wordDict.includes(s.slice(i,j))){
                table[j]=true
            }
        }
    }
    return table[table.length-1]
};