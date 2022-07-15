/**
 * @param {number} n
 * @return {string[]}
 */

 const isValid = (str) =>{
    const stack = []
    let i = 0
    let len = str.length
    
    while(i < len){
        let curParen = str[i]
        stack.push(curParen)
        
        let open = stack[stack.length - 2]
        let closed = stack[stack.length - 1]
        
        if(open + closed === '()'){
            stack.pop()
            stack.pop()
        }
        i++
    }
    
    return stack.length === 0
}

var generateParenthesis = function(n) {
    const result = []
    
    const dfs = (i, n, slate, oCount, cCount) =>{
        
        if(oCount > n) return
        if(cCount > oCount) return
        
        if(i === n * 2){
           result.push(slate.join(''))
            return
        }
        
        slate.push('(')
        dfs(i + 1, n, slate, oCount + 1, cCount)
        slate.pop()
        
        slate.push(')')
        dfs(i + 1, n, slate, oCount, cCount + 1)
        slate.pop()
    }
    
    dfs(0, n, [], 0, 0)
    return result
};