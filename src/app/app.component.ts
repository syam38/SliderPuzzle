import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
matrix:number[][];
winmatrix:number[][];
  constructor(){
  this.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
  this.winmatrix= [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
 }  
 checkForCompletion(){
   var flag=0;
   console.log(this.matrix);
   console.log(this.winmatrix);
   
    for(let i=0;i<this.matrix.length;i++){    
      for(let j=0;j<this.matrix[0].length;j++){
        if(this.winmatrix[i][j]!=this.matrix[i][j]){
            flag=1;
        }
     }
    }
    if(flag==0){
      alert('You Won');
    }

 }
 moveTile(tileNumber:number){  
  var flag=0;
  var won=1;
  for(let i=0;i<this.matrix.length;i++){    
      for(let j=0;j<this.matrix[0].length;j++){
       if(this.matrix[i][j]==tileNumber){
        this.swapTile(i,j);
        this.checkForCompletion();
        flag=1; 
        break;       
      }
    }
    if(flag==1){
      break;
    }
  }
 }
 swapTile(i:number,j:number){
    if(i+1<this.matrix.length&&this.matrix[i+1][j]==0){                    
              this.matrix[i+1][j]=this.matrix[i][j];              
              this.matrix[i][j]=0;             
          }
          else if(j+1<this.matrix[0].length&&this.matrix[i][j+1]==0){
              this.matrix[i][j+1]=this.matrix[i][j];
              this.matrix[i][j]=0;
             
          }
          else if(i-1>=0 && this.matrix[i-1][j]==0){
              this.matrix[i-1][j]=this.matrix[i][j];
              this.matrix[i][j]=0;
             
          }
          else if(j-1>=0 && this.matrix[i][j-1]==0){
              this.matrix[i][j-1]=this.matrix[i][j];
              this.matrix[i][j]=0;
              
          }
       
 }

shuffleMatrix() {
  var k,j,tempk,tempj;
    for(var i = 0; i< this.matrix.length; i++) {
       k = this.matrix[i].length;
       while(k--){
            j = Math.floor(Math.random() * (this.matrix.length - 1));
            tempk = this.matrix[i][k];
            tempj = this.matrix[i][j];
            this.matrix[i][k] = tempj;
            this.matrix[i][j] = tempk;
       }
    }
}

}
