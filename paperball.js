class paperBall {
    

constructor(x,y,radius){
var options={
    isStatic:false,
    friction:0.5,
   restitution:0.3,
    density:1.2
   

}

this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
this.image=loadImage("paper.png");



World.add(world,this.body);


}
display(){

   
    var pos = this.body.position;
 

   imageMode(CENTER) ;
        image(this.image, pos.x, pos.y,80,80);
        
  
   pop();
    
}

}