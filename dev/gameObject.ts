class GameObject {
    public div      : HTMLElement;
    public x        : number;
    public y        : number;
    public width    : number;
    public height   : number;
    public speed    : number = 0;

    constructor(tag: string) {
                let container: HTMLElement   = document.getElementById("container");
                this.div                     = document.createElement(tag);
                container.appendChild(this.div);
        }

        protected draw(): void {
                this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        }

}