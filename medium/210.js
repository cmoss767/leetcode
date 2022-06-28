/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

 const buildAdjList = (n, edges)=>{
    const adjList = Array.from({length:n}, ()=> [])
    
    for(let edge of edges){
        let [src,dest] = edge
        adjList[src].push(dest)
    }
    return adjList
}

const dFS = (node, adjList, visited, arrive, depart, topSort)=>{
    arrive[node]++
    visited[node] = true
    
    for(let neighbor of adjList[node]){
        if(!visited[neighbor]){
            visited[neighbor]=true
            if(dFS(neighbor, adjList, visited, arrive, depart, topSort)) return true
        }else{
            if(depart[neighbor]==0) return true
        }
    }
    depart[node]++
    topSort.push(node)
    return false
}

var findOrder = function(numCourses, prerequisites) {
    const adjList = buildAdjList(numCourses, prerequisites)
    const visited = {}
    const arrive = new Array(numCourses).fill(0)
    const depart = new Array(numCourses).fill(0)
    const topSort = []
    
    for(let vertex = 0;vertex<adjList.length;vertex++){
        if(!visited[vertex]){
            if(dFS(vertex, adjList, visited, arrive, depart, topSort)) return []
        }
    }
    
    return topSort
};
