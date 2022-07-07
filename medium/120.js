/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    const table = []
    for(let row of triangle) table.push(new Array(row.length).fill(0))
     table[0] = triangle[0]
     
     for(let row=1;row<table.length;row++){
         for(let col = 0;col<table[row].length;col++){
             if(col===0){
                 table[row][col] = table[row-1][col] + triangle[row][col]
             }else if(col === table[row].length - 1){
                 table[row][col] = table[row-1][table[row-1].length-1] + triangle[row][col]
             }else{
                 table[row][col] = Math.min(table[row-1][col], table[row-1][col-1]) + triangle[row][col]
             }
         }
     }
     return Math.min(...table[table.length-1])
 };