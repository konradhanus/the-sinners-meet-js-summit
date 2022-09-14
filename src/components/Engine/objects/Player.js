import { gravity } from "../../../config";
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

        this.velocity = {
            x:0, 
            y:0
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

    update() {
        this.frame++;
        this.draw();
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + 
           this.height + 
           this.velocity.y <= this.canvas.height
        )
        {
            this.velocity.y += gravity
        }
    }
}