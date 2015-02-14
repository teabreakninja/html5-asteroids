function Explosion(I){
    
    //I.pos = {x:0, y:0};
    I.img = game_images[3];
    I.idx = 0;
    I.img_width = 128;
    I.img_height = 128;
        
    I.playSnd = function(){
        I.snd = snd_explosion.cloneNode().play();
    }
    
    I.update = function(){
        I.idx += I.img_width;
        if (I.idx > (24 * I.img_width)){
            explosions.splice(explosions.indexOf(I),1);
            I = null;
        }
    };
    
    I.draw = function(){
        ctx.drawImage(I.img, 0+I.idx, 0,  I.img_width, I.img_height,
                    I.pos.x, I.pos.y, I.img_width, I.img_height);
    };
    
    return I;
}