Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
exports.min = function min(array) {

    if ( array === undefined || array.length == 0 ){
        return 0;}
    else return Math.min.apply(null, array)
}

exports.max = function max(array) {
    if ( array === undefined || array.length == 0 ){
        return 0;}
    else return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    if ( array === undefined || array.length == 0 ){
        return 0;}
    else return array.reduce((a, b) => (a + b)) / array.length;
}
