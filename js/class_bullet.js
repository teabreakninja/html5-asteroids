function Class_Bullet(){
    this.active = false;
    this.pos = {x:0, y:0};
    this.vel = {x:0, y:0};
    this.angle = 0;
    this.angle_vel = 0;
    this.lifespan = 100;
    this.age = 0;
    this.img = game_images[0];
    this.width = this.img.width;
    this.height = this.img.height;
    this.radius = this.width/2;
        
    this.center = function(){
        return {x: this.pos.x + this.radius, y: this.pos.y + this.radius};
    };

/*
    //collision detection
    this.collide = function(sprite) {
        d = dist(this.center(), sprite.center());
        if (d <= this.radius + sprite.radius){
            return true;
        }else{
            return false;
        }
            
    };
*/
    this.update = function(){
        acc = angle_to_vector(this.angle);
        cw = canvas.width;
        ch = canvas.height;
        //update position using current position + angle vector + inital velocity (from ship)
        this.pos.x = ((((this.pos.x + (acc.x * 6) + this.vel.x) % cw) + cw) % cw);
        this.pos.y = ((((this.pos.y + (acc.y * 6) + this.vel.y) % ch) + ch) % ch);

        //remove if aged
        if (this.age++ > this.lifespan){
            idx = bullets.indexOf(this);
            bullets.splice(this, 1);
        }
    };

    this.draw = function(){
        ctx.drawImage(this.img, 0, 0, this.width, this.height,
                    this.pos.x, this.pos.y, this.width, this.height);
    };

}