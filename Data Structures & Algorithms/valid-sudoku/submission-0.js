class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) { 
        const rowMap = new Map();
        const colMap = new Map();
        const groupMap = new Map();
        if(!board.length===9){
            return false;
        }
        for(var i=0;i<=board.length-1 ; i++){
           if(!board[i].length===9){return false}
           for(var j =0 ; j<=8 ; j++){
            const groupCode = `${Math.floor(j/3)}-${Math.floor(i/3)}`
            if(!rowMap.get(j)){
                rowMap.set(j,[board[i][j]])
            } else { 
                if(board[i][j]!=="." && rowMap.get(j).includes(board[i][j])) return false
                rowMap.set(j,[...rowMap.get(j),board[i][j]])     
            }
            if(!colMap.get(i)){
                colMap.set(i,[board[i][j]])
            } else { 
                 if(board[i][j]!=="." && colMap.get(i).includes(board[i][j])) return false
                colMap.set(i,[...colMap.get(i) ,board[i][j]])       
            }
            if(!groupMap.get(groupCode)){
                groupMap.set(groupCode,board[i][j])
           } else {
                if(board[i][j]!=="." && groupMap.get(groupCode).includes(board[i][j])) return false
                groupMap.set(groupCode , [...groupMap.get(groupCode),board[i][j]])
           }
        }
    }
    return true
    }
}