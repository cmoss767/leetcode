/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    let capitalCount = 0
    
    for(let i = 0;i<word.length;i++){
        const char = word[i]
        if(char===char.toUpperCase()){
            capitalCount+=1
        }
    }
    return capitalCount === word.length || capitalCount ==0 || (word[0]=== word[0].toUpperCase() && capitalCount === 1)
    
};