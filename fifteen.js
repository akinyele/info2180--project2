

var pieces = [];
var neighbours = [];
var blankCol = 300;
var blankRow = 300;
var pos;



window.onload = function() {
    
    creatTiles();
    document.getElementById("shufflebutton").addEventListener("click", shuffle);
   
    
	
};



function creatTiles(){
    //var puzzlearea = $('#puzzlearea');
    pieces = document.querySelectorAll("#puzzlearea div");
    var col = 0;
    var row = 0;
    for(var i =0; i < pieces.length; i++){
        pos = i;
        pieces[i].setAttribute("class", "puzzlepiece");
        pieces[i].style.top = 100 * row + "px" ;
        pieces[i].style.left = 100 * col + "px";
        pieces[i].style.backgroundPosition = -col * 100 + "px " + row * -100 + "px"; 
 		pieces[i].addEventListener("click", moveTileHelp); 
 		pieces[i].addEventListener("mouseover", hover); 
 		
 			
        col++;
        if (col == 4){
            col = 0;
            row ++;
        }
	}
	
}


function moveTileHelp(event){
    moveTile(this);
}
function moveTile(tile){
    if(isNeighbour(tile.style.left, tile.style.top)){
        
            var tempCol = tile.style.left;
            var tempRow = tile.style.top;
            tile.style.top = blankRow + "px"; 
            tile.style.left = blankCol + "px";
            blankRow = parseInt(tempRow);
            blankCol = parseInt(tempCol);
    }
 }
 

 
 
 
 
 function isNeighbour(col , row){
     
     if (Math.abs(blankCol - parseInt(col)) == 100) { 
 		if (Math.abs(blankRow - parseInt(row)) == 0) { 
 			return true; 
 		} 
 	} else if (Math.abs(blankRow - parseInt(row)) == 100) { 
 	    if (Math.abs(blankCol - parseInt(col)) == 0) { 
 			return true; 
 		} 
 	} 
 }
 
 
 function hover(event){
     
     if (isNeighbour(this.style.left, this.style.top)){
         this.setAttribute("class", "puzzlepiece movablepiece");
     }
     
     if(farNeighbour(this.style.left, this.style.top)){
         this.setAttribute("class", "puzzlepiece movablepiece");
         
     }
     
 }
 
function shuffle(){
    
   
    
    var shuffles = [];
    
    for (var h = 0; h<150; h++){
        for (var i =0; i < pieces.length; i++){
        
            if (isNeighbour(pieces[i].style.left, pieces[i].style.top)){
                shuffles.push(pieces[i]);
            }
        }
     
     
        moveTile(shuffles[Math.floor(Math.random() * shuffles.length)]); 
        shuffles = []; 
     
    }
    
 }
 



function farNeighbour(col, row){
   
 	if (Math.abs(blankCol - parseInt(col)) == 100 || Math.abs(blankCol - parseInt(col)) == 300 || Math.abs(blankRow - parseInt(col)) == 200) { 
 		if (Math.abs(blankRow - parseInt(row)) == 0) { 
 			return true; 
 		} 
 	} else if (Math.abs(blankRow - parseInt(row)) == 100 || Math.abs(blankRow - parseInt(row)) == 300 || Math.abs(blankRow - parseInt(row)) == 200) { 
 	    if (Math.abs(blankCol - parseInt(col)) == 0) { 
 			return true; 
 		} 
 	} 
} 
  
function allNeighbours(tiles){
    
    for (var i =0; i < pieces.length; i++){
        
            if (farNeighbour(pieces[i].style.left, pieces[i].style.top)){
                neighbours.push(tiles);
            }
    }
}


function highlight(col, row){
    
    if(Math.abs(blankRow - parseInt(row)) == 0){
        
        for (var i =0; i < neighbours.length; i++){
             
             if (Math.abs(blankRow - parseInt(row)) == 300){
                                 
             }
            
            
        }
        
    }
    
    
}