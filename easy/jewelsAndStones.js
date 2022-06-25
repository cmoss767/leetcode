/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let count = 0
    
    const jewelsHT = {}
    for(const jewel of jewels){
        jewelsHT[jewel] =true
    }
    for(const stone of stones){
        if(stone in jewelsHT){
            count+=1
        }
    }
    return count
};