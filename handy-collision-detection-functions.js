/*
  Rectangles intersecting

  Returns true if rectangles b1 and b2 are intersecting.

  b1 and b2 must have size and center.
  e.g. b1 might be: { size: { x: 10, y: 10 }, center: { x: 30, y: 30 } }
*/
var rectanglesIntersecting = function(b1, b2) {
  return !(
    b1 === b2 ||
      b1.center.x + b1.size.x / 2 <= b2.center.x - b2.size.x / 2 ||
      b1.center.y + b1.size.y / 2 <= b2.center.y - b2.size.y / 2 ||
      b1.center.x - b1.size.x / 2 >= b2.center.x + b2.size.x / 2 ||
      b1.center.y - b1.size.y / 2 >= b2.center.y + b2.size.y / 2
  );
};

/*
  Lines intersecting

  Returns true if lines a and b are intersecting.

  a and b must each be an array of two points.
  The first point is the beginning of the line.
  The second point is the end.

  e.g. a might be: [{ x: 10, y: 20 }, { x: 30, y: 40 }]
*/
var linesIntersecting = function(a, b) {
  var d = (b[1].y - b[0].y) * (a[1].x - a[0].x) -
      (b[1].x - b[0].x) * (a[1].y - a[0].y);
  var n1 = (b[1].x - b[0].x) * (a[0].y - b[0].y) -
      (b[1].y - b[0].y) * (a[0].x - b[0].x);
  var n2 = (a[1].x - a[0].x) * (a[0].y - b[0].y) -
      (a[1].y - a[0].y) * (a[0].x - b[0].x);

  if (d === 0.0) return false;
  return n1 / d >= 0 && n1 / d <= 1 && n2 / d >= 0 && n2 / d <= 1;
};
