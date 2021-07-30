class Chain {
    constructor (body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          length:102,
          stiffness:0.5,
        }
        this.chain= Matter.Constraint.create(options)
        World.add(world,this.chain)

    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2)

        var Anchor1X =pointA.y
        var Anchor1Y =pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2X=pointB.y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}