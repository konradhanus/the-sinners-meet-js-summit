class Platform{
    constructor(ctx, canvas, x, y, image, blockWidth, type) {
        this.c = ctx;
        this.canvas = canvas;
        this.position = {x, y}
        this.image = image;
        this.width = blockWidth;
        this.height = blockWidth;
        this.type = type;
    }

    draw() {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}

export default Platform;