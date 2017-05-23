/// <reference path="gameObject.ts"/>
// this needs a reference to gameObject 

class Alien extends GameObject {

    //ASSESSMENT: strategy pattern
    public behaviour: Behaviour;

    // use to make and draw alien
    // alien = 61 × 188 pixels
    constructor() {

        super("alien");

        //position alien
        this.x = 50;
        this.y = 500;
        this.width = 61;
        this.height = 188;

       

        //ASSESSMENT: strategy pattern
        this.behaviour = new Play(this);

        //draw alien here
        this.draw();
    }

    public move(): void {
        var a: Game = Game.getInstance();

        for (var candy of a.candies) {
            if (Utility.checkCollision(this, candy)) {
                var i = a.candies.indexOf(candy);
                a.candies.splice(i, 1);
                candy.div.remove();

                a.score += 10;

            }
        }
        
        this.behaviour.update();
        this.draw();
    }

  

}