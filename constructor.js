const prompt = require("prompt-sync")();

function Calculator(){
    this.read = () => {
        this.a = +prompt("a",0);
        this.b = +prompt("b",0);
    };

    this.sum = () => {
        return this.a + this.b;
    }
}

let calcy = new Calculator();
calcy.read();

console.log("sum = "+calcy.sum());