/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

 const buildAdjList = (n, edges)=>{
    const adjList = Array.from({length: n}, ()=> [])
    
    for(let edge of edges){
        let [src, dest] = edge
        adjList[src].push(dest)
        adjList[dest].push(src)
    }
    return adjList
}

const isBfsCycle = (node, adjList, visited, parent)=>{
    const queue = [node]
    
    while(queue.length){
        let curNode =queue.shift()
        visited[curNode]=true
        
        for(let neighbor of adjList[curNode]){
            if(!visited[neighbor]){
                visited[neighbor]=true
                parent[neighbor] = curNode
                queue.push(neighbor)
            }else{
                if(neighbor !=parent[curNode]) return true
            }
        }
    }
    return false
}


var validTree = function(n, edges) {
    const adjList = buildAdjList(n, edges)
    const visited = {}
    const parent = {}
    let regions = 0
    
    for(let vertex = 0;vertex<adjList.length;vertex++){
        if(!visited[vertex]){
            regions++
            if(regions>1) return false
            if(isBfsCycle(vertex, adjList, visited, parent)) return false
        }
    }
    return true
};