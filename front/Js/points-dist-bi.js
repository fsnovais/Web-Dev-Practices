function Point(x,y) {
    this.x = x
    this.y = y
}

var p = new Point(1,1)

Point.prototype.r= function() {
    return Math.sqrt(
        this.x * this.x + 
        this.y * this.y
    )
}

console.log(p.r())