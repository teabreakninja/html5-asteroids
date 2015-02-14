function Asteroid(I){    I.active = false;    //I.pos    //I.vel    //I.angle_vel    I.angle = 0;    I.img = game_images[2];    I.radius = I.img.width/2;    I.explosion_image = game_images[4];        I.center = function(){        return {x: I.pos.x + I.radius, y: I.pos.y + I.radius};    };        //collision detection    I.collide = function(sprite) {        d = dist(I.center(), sprite.center());        if (d <= I.radius + sprite.radius){            return true;        }else{            return false;        }                };        I.explode = function(grp){        var e = Explosion({            pos: {x: I.pos.x, y: I.pos.y}        });        e.playSnd();        explosions.push(e);    };        I.update = function() {        //update angle        I.angle += I.angle_vel;        //update position mod-ing for screen wrap        cw = canvas.width;        ch = canvas.height;        I.pos.x = ((((I.pos.x + I.vel.x) % cw) + cw) % cw);        I.pos.y = ((((I.pos.y + I.vel.y) % ch) + ch) % ch);    };        I.draw = function() {        //to rotate, have to translate to center of         //image, rotate, then translate back again        ctx.save();        ctx.translate(I.pos.x + (I.img.width/2), I.pos.y + (I.img.height/2));   //translate center        ctx.rotate(I.angle * Math.PI/ 180);        ctx.translate(-(I.pos.x + (I.img.width/2)), -(I.pos.y + (I.img.height/2))); //translate back        ctx.drawImage(I.img, 0, 0, I.img.width, I.img.height,                    I.pos.x, I.pos.y, I.img.width, I.img.height);        ctx.restore();    };        return I;}