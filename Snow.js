class Snow {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = r;
                                   
        this.body = Bodies.circle(x, y,r, options);
        this.image = loadImage("snow4.webp")

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }

};