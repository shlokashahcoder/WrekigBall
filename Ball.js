class Ball{
    constructor(x,y,width,height){
        var ball_options={
            density:1,
            frictionAir:0.005,
        }
        this.ball = Bodies.rectangle(x,y,width,height)
        this.width = width
        this .height = height
        World.add(world,this.ball)

    }
    display(){
        push()
        translate(this.ball.position.x,this.ball.position.y)
        rotate(this.ball.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.width,this.height)
        pop();
    }
}