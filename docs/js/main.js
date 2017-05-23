var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(tag) {
        this.speed = 0;
        var container = document.getElementById("container");
        this.div = document.createElement(tag);
        container.appendChild(this.div);
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return GameObject;
}());
var Alien = (function (_super) {
    __extends(Alien, _super);
    function Alien() {
        var _this = _super.call(this, "alien") || this;
        _this.x = 50;
        _this.y = 500;
        _this.width = 61;
        _this.height = 188;
        _this.behaviour = new Play(_this);
        _this.draw();
        return _this;
    }
    Alien.prototype.move = function () {
        var a = Game.getInstance();
        for (var _i = 0, _a = a.candies; _i < _a.length; _i++) {
            var candy = _a[_i];
            if (Utility.checkCollision(this, candy)) {
                var i = a.candies.indexOf(candy);
                a.candies.splice(i, 1);
                candy.div.remove();
                a.score += 10;
            }
        }
        this.behaviour.update();
        this.draw();
    };
    return Alien;
}(GameObject));
var Candy = (function (_super) {
    __extends(Candy, _super);
    function Candy() {
        var _this = _super.call(this, "candy") || this;
        _this.x = Math.floor(Math.random() * 932);
        _this.y = -100;
        _this.width = 92;
        _this.height = 95;
        _this.speed = 7;
        _this.draw();
        return _this;
    }
    Candy.prototype.move = function () {
        this.y += this.speed;
        this.draw();
        var a = Game.getInstance();
        if (this.y >= 768) {
            var i = a.candies.indexOf(this);
            a.candies.splice(i, 1);
            this.div.remove();
            a.score = 0;
        }
    };
    return Candy;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.alien = new Alien();
        this.scoreDiv = document.getElementById("score");
        this.score = 0;
        this.candies = new Array();
        this.candies.push(new Candy());
        this.timer = setInterval(function () { return _this.createCandy(); }, 1000);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.createCandy = function () {
        this.candies.push(new Candy());
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.candies; _i < _a.length; _i++) {
            var candy = _a[_i];
            candy.move();
        }
        this.alien.move();
        this.scoreDiv.innerHTML = "Score: " + this.score;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var game = Game.getInstance();
});
var Play = (function () {
    function Play(l) {
        var _this = this;
        this.alien = l;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Play.prototype.update = function () {
        this.alien.x += this.alien.speed;
    };
    Play.prototype.onKeyDown = function (e) {
        console.log(e.key);
        if (e.key == 'ArrowLeft') {
            this.alien.speed = -12;
        }
        else if (e.key == 'ArrowRight') {
            this.alien.speed = 12;
        }
    };
    Play.prototype.onKeyUp = function (e) {
        this.alien.speed = 0;
    };
    return Play;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.checkCollision = function (m, n) {
        return (m.x < n.x + n.width &&
            m.x + m.width > n.x &&
            m.y < n.y + n.height &&
            m.height + m.y > n.y);
    };
    return Utility;
}());
//# sourceMappingURL=main.js.map