/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

 const buildAdjList = (n, edges)=>{
    const adjList = Array.from({length:n}, ()=>[])
    
    for(let edge of edges){
        let [src, dest] = edge
        
        adjList[src].push(dest)
        adjList[dest].push(src)
    }
    
    return adjList
}

const bFS = (node, adjList, visited)=>{
    const queue = [node]
    visited[node] = true
    
    while(queue.length){
        let curNode = queue.shift()
        
        for(let neighbor of adjList[curNode]){
            if(!visited[neighbor]){
                visited[neighbor] = true
                queue.push(neighbor)
            }
        }
    }
}
var countComponents = function(n, edges) {
    const adjList = buildAdjList(n, edges)
    const visited = {} 
    let numComponents = 0
    
    for(let vertex=0;vertex<adjList.length;vertex++){
        if(!visited[vertex]){
            numComponents++
            bFS(vertex, adjList, visited)
        }
    }
    return numComponents
    
};