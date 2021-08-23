class Block{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
        
           
        }
        this.body = Bodies.rectangle(x, y,50, 60, options);
        this.width = 50;
        this.height = 60;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}