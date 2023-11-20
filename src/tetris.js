export class Game {
    constructor(){
        this.gameEnd = false
        this.field = []
    }
    
    init(field){
        this.field = field
    }

    run() {
        while(!this.gameEnd){
          this.nextGeneration()
        }
    }

    /*. 
    . порожній піксель
    p - піксель “підвішеної” фігури
    # - піксель “ландшафта”
    */
   
    collisionCheck(field, i, j){
        if(field[i+2]){
            field[i+2][j] == "#" ? this.gameEnd = true: false
        }
    }

    nextGeneration(){
      const nextMap = [...this.field];
      for (let i = this.field.length - 1; i > 0; i--) {
        for (let j = 0; j < this.field[1].length; j++) {
          if(this.field[i][j]  == "p"){
            if(this.field[i + 1]){
                this.collisionCheck(this.field, i,j)
                nextMap[i + 1][j] = "p"
                nextMap[i][j] = "."
            } else this.gameEnd = true
          }
        }
      }
      this.field = [...nextMap]
    }
}