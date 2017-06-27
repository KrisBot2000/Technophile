
function Tablet(){}

Tablet.prototype.touch = function(x, y){
  const obj = {};
  obj.x = x;
  obj.y = y;
  return obj;
}

module.exports = Tablet;