
class Game {
    //ASSESSMENT: instance 
    private static instance: Game;
    private alien: Alien;
    private timer: number;
    private scoreDiv: HTMLElement;

    //needs to be public
    public candies: Array<Candy>;
    public score: number;


    private constructor() {
        this.alien = new Alien();
        this.scoreDiv = document.getElementById("score");
        this.score  = 0;
        this.candies = new Array<Candy>();
        this.candies.push(new Candy());
        this.timer = setInterval(() => this.createCandy(), 1000);

        requestAnimationFrame(() => this.gameLoop());
    }

    private createCandy() {
        this.candies.push(new Candy());

    }

    private gameLoop(): void {
        // move it!
        for (var candy of this.candies) {
            candy.move();
        }
        this.alien.move();
        this.scoreDiv.innerHTML = "Score: " + this.score;



        requestAnimationFrame(() => this.gameLoop());
    }

    //ASSESSMENT: Singleton 
    public static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}


window.addEventListener("load", function () {
    var game: Game = Game.getInstance();
});