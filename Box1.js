class Box1 extends BaseClass {
  constructor(x, y){
    super(x,y,40,40);
    this.visibility = 255;
  }
  display(){
    fill("blue");
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
  }
};
