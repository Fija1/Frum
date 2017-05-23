class Candy extends GameObject {

    // use to make and draw candy
    // 92 × 95 pixels

    constructor() {

        super("candy");

        //position candy
        this.x = Math.floor(Math.random() * 932);
        this.y = -100;
        this.width = 92;
        this.height = 95;
        this.speed = 7;

        //draw candy here
        this.draw();
    }

    public move(): void {
        this.y += this.speed;
        this.draw();

        var a: Game = Game.getInstance();
        if (this.y >= 768) {

            // use splice because infinite candies
            var i = a.candies.indexOf(this);
            a.candies.splice(i, 1);
            this.div.remove();

           // a.score -= 10;

        }
        
    }

}