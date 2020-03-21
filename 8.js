class Cuboid {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
        volume(){
            const volumeResult = this.height * this.length * this.width;
            return 'Volume: ' + volumeResult + ' cube units'; 
        }
        surfaceArea(){
            const surfaceAreaResult = 2*(this.height*this.length + this.height*this.width + this.length*this.width);
            return 'Surface Area: ' + surfaceAreaResult + ' square units';
        }
}

const a = new Cuboid(5, 4, 3);
console.log("Cuboid's", a.volume());
console.log("Cuboid's", a.surfaceArea());

class Cube extends Cuboid{
    constructor(side){
        super(side, side, side)
    }
}

const b = new Cube(3)
console.log("Cube's", b.volume());
console.log("Cube's", b.surfaceArea());