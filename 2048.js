var board = [[0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],
             [0,0,0,0]];
tile = addtiles(board)
function transpose(a){
    return Object.keys(a[0]).map(function(c){
return a.map(function(prob){return prob[c];});
    });
}
function printArr(board){
    for(var i=0;i<4;i++){
        console.log(""+board[i][0]+""+board[i][1]+""+board[i][2]+""+board[i][3]+"");
        console.log("------");
    }
}
function random(emptytiles){

    var empty = emptytiles[Math.floor(Math.random()*emptytiles.length)];
    return empty;
    
    }
function addtiles(){
    let track=[];
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(board[i][j]==0){
                track.push({
                    x:i,
                    y:j
                });
            }
        }
    }

if(track.length==0){
   console.log("GAME ENDS HERE");
   process.exit();
}  if(track.length>=16){
     let spot1=random(track);
     let spot2 =random(track);
     let prob = Math.random(1);
     board[spot1.x][spot1.y]=prob > 0.9 ? 4:2;
     board[spot2.x][spot2.y]=prob > 0.9 ? 4:2;
}
else if (track.length>0&&track.length!=16){
        let spot =random(track);
        console.log(spot)
        let prob = Math.random(1);
        board[spot.x][spot.y]= prob>0.9 ? 4 :2;
}
 return board   
    }

printArr(tile)

 
function slide(row){
    let arr=  row.filter(val=>val)
     let missing = 4- arr.length;
     let zeroes = Array(missing).fill(0);
     arr=arr.concat(zeroes);
     return arr;
}
function combine(row){
    for(i=3;i>=1;i--){
        let a = row[i];
        let b = row[i-1];
        if(a==b){
            row[i]=a+b;
            row[i-1]=0
        }
    }
    return row;
}
function addrow(row){
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
}
function keyPressed(){

    const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {   
let z = key.name;
if(z=="left"){
    let row1= addrow(tile[0]);
    let row2= addrow(tile[1]);
    let row3= addrow(tile[2]);
    let row4= addrow(tile[3]);
    // console.log(row1);
    // updating the game board 'tile' with row1, row2, row3, row4
    tile[0]=row1;
    tile[1]=row2;
    tile[2]=row3;
    tile[3]=row4;
    addtiles(tile);
    printArr(tile);  
}
  
   else if(z=="right"){
            let row1= addrow(tile[0].reverse());
            let row2= addrow(tile[1].reverse());
            let row3= addrow(tile[2].reverse());
            let row4= addrow(tile[3].reverse());
            // console.log(row1);
            tile[0]=row1.reverse();
            tile[1]=row2.reverse();
            tile[2]=row3.reverse();
            tile[3]=row4.reverse();
            addtiles(tile);
            printArr(tile);  
        
         }  
         else if(z=="up"){
        //   rtc will   transpose row to columm and  then it is addes to left  
            rtc= transpose(tile);
            let row1= addrow(rtc[0]);
            let row2= addrow(rtc[1]);
            let row3= addrow(rtc[2]);
            let row4= addrow(rtc[3]);
            // console.log(row1);
            rtc[0]=row1;
            rtc[1]=row2;
            rtc[2]=row3;
            rtc[3]=row4;
            ctr = transpose(rtc);
            tile[0] = ctr[0];
            tile[1] = ctr[1];
            tile[2] = ctr[2];
            tile[3] = ctr[3];
            addtiles(tile);
            printArr(tile);  


             }
             else  if(z=="down"){
                            rtc= transpose(tile);
                            let row1= addrow(rtc[0].reverse());
                            let row2= addrow(rtc[1].reverse());
                            let row3= addrow(rtc[2].reverse());
                            let row4= addrow(rtc[3].reverse());
                            rtc[0]=row1.reverse();
                            rtc[1]=row2.reverse();
                            rtc[2]=row3.reverse();
                            rtc[3]=row4.reverse();
                            ctr = transpose(rtc);
                            tile[0] = ctr[0];
                            tile[1] = ctr[1];
                            tile[2] = ctr[2];
                            tile[3] = ctr[3];
                            addtiles(tile)
                            printArr(tile)
             }
            }
            })
        }
       
        
keyPressed();
    
