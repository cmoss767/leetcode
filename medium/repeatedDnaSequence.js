/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    const seen = {}
    const res = []
    let i = 0
    
    while(i+10<=s.length){
        const dnaSequence = s.slice(i, i+10)
        seen[dnaSequence] = seen[dnaSequence] +1 || 1
        
        if(seen[dnaSequence] == 2){
            res.push(dnaSequence)
        }
        
        i++
        }
    
    return res
};