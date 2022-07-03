/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const sortedStr = strs.map(word=> word.split('').sort().join(''))
    const hash = {}
    
    for(let i = 0;i<strs.length;i++){
        if(!hash[sortedStr[i]]){
            hash[sortedStr[i]] = [strs[i]]
        }else{
            hash[sortedStr[i]].push(strs[i])
        }
    }
    
    return Object.values(hash)
};