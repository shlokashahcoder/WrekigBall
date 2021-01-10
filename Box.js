class Box{
    constructor(x,y,width,height){
        var box_options={
            restitution:0.8,
            friction:1,
            density:0.04
        }
         this.box = Bodies.rectangle(x,y,width,height,box_options)
         this.width = width
         this.height = height
         World.add(world,this.box)
    }
    display(){
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}