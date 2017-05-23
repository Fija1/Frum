class Play implements Behaviour{
    public alien: Alien;


    public update(): void{
        this.alien.x += this.alien.speed;
    }

    constructor(l: Alien){
        this.alien = l;
         window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

      // function for movement
    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.key);

        if (e.key == 'ArrowLeft') {
            this.alien.speed = -12;
        }
        else if (e.key == 'ArrowRight') {
            this.alien.speed = 12;
        }
    }

    private onKeyUp(e: KeyboardEvent) {
        this.alien.speed = 0;
    }


}