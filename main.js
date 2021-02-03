'use strict'

const point = {
  x:100,
  y:180,
};

point.x = 120;

point.z = 90;
delete point.y;
console.log(point);