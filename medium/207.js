/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 const buildAdjList = (n, edges)=>{
    const adjList = Array.from({length:n}, ()=> [])
    
    for(let edge of edges){
        let [src,dest] = edge
        
        adjList[src].push(dest)
    }
    return adjList
}

const hasCycleDFS = (node, adjList, visited,arrive, depart)=>{
    arrive[node]++
    visited[node]=true
    
    for(let neighbor of adjList[node]){
        if(!visited[neighbor]){
            visited[neighbor]=true
            
            if(hasCycleDFS(neighbor,adjList, visited, arrive, depart))return true;
        }else{
            if(depart[neighbor]===0) return true
        }
    }
    
    depart[node]++
    return false
}


var canFinish = function(numCourses, prerequisites) {
    const adjList = buildAdjList(numCourses, prerequisites)
    const visited = {}
    const arrive = Array.from({length: numCourses}, ()=> 0)
    const depart = Array.from({length: numCourses}, ()=> 0)
    
    for(let vertex = 0;vertex<adjList.length;vertex++){
        if(!visited[vertex]){
            if(hasCycleDFS(vertex, adjList, visited,arrive, depart)) return false
        }
    }
    return true
};