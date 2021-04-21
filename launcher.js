class launcher{
    constructor(body,anchor){
        var options = {bodyA:body,pointB:anchor,stiffness:0.04,length:1}

        this.bodyA = body;
        this.pointB = anchor;
        this.launcher = Constraint.create(options);  
        World.add(world,this.launcher);
    }

fly(){
    this.launcher.bodyA = null;

}

attach(body){
    this.launcher.bodyA = body
}

display(){
var posA = this.bodyA.position;
var posB = this.pointB;
strokeWeight(2);
//line(posA.x,posA.y,posB.x,posB.y);
}

}


