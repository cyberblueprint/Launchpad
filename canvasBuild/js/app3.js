var Item = function (x, y, size, ctx, src) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    this.selected = false;
    this.color = 'indigo';
    this.src = false;
}

Item.prototype.render = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    if (this.selected) {
        ctx.fillStyle = "gold";
    } else  {
        ctx.fillStyle = this.color;
    }
    ctx.fill();
};

Item.prototype.activate = function(src) {
	
};