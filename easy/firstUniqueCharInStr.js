/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const characterCount = {}
    
    for(let i =0;i<s.length;i++){
        const char = s[i]
        characterCount[char] = characterCount[char]+1 || 1
    }
    for(let i =0;i<s.length;i++){
        const char = s[i]
        if(characterCount[char] ===1){
            return i
        }
    }
    return -1
};