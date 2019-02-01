captureScreenshot() {
    function callback() {
        var canvas = document.getElementById("GameCanvas");
        var base64 = canvas.toDataURL("imagea/png");
        cc.director.off(cc.Director.EVENT_AFTER_DRAW);
        var frame = this.base64ToSpriteFrame(base64, (frame) => {
            this.sprite.spriteFrame = frame;

        });
    }
    cc.director.on(cc.Director.EVENT_AFTER_DRAW, callback.bind(this));
},

base64ToSpriteFrame(base64, callback) {
    var img = new Image();
    img.src = base64;
    img.onload = function () {
        var texture = new cc.Texture2D();
        texture.initWithElement(img);
        texture.handleLoadedTexture();
        var newframe = new cc.SpriteFrame(texture);
        if (callback) callback(newframe);
    }
}