export default class Player{
    constructor(ctx, canvas, image, blockWidth){
        this.defaultPostion = {
            x: 50, 
            y: 50
        };

        this.c = ctx;
        this.image = image;
        this.canvas = canvas;
        this.position ={
            x: this.defaultPostion.x, 
            y: this.defaultPostion.y
        }
        
        this.width = blockWidth;
        this.height = blockWidth;
        this.sprites = {
            stand:this.image.stand[0],
        }

        this.currentSprite = this.sprites.stand;
        this.frame = 0;
    }

    draw() {
        this.c.drawImage(this.currentSprite, 10, 10, 40,40, this.position.x, this.position.y, this.width, this.height)
    }
}