class Player { 

    constructor (x, y, width, height) {
        var op = {
            isStatic : true
        }
        this.image = loadImage ("assets/player.png");
        this.width = width; 
        this.height = height; 
        this.body = Bodies.rectangle(x,y,this.width,this.height,op); 
        World.add(world,this.body);
    }

    display (){
        var pos = this.body.position; 
        var angle = this.body.angle; 
        
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);  
        image( this.image, 0, 0, this.width, this.height);
        pop (); 
    }
        
}