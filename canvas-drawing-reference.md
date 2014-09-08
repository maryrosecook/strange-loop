# Canvas drawing reference

## Get reference to canvas

    var screen = document.getElementById("screen").getContext("2d");

## Colors

In CSS-style RGB (red, green, blue).  Each value is a hex number.
Min: `00`.  Max: `ff`.

### Examples

    "#ff0000" // red
    "#00ff00" // green
    "#0000ff" // blue

## Rectangles

### Draw rectangle outline

    screen.strokeStyle = "#ff0000";
    screen.strokeRect(10, 10, 50, 70); // top left x, top left y, width, height

### Draw solid rectangle

    screen.fillStyle = "#00ff00";
    screen.fillRect(10, 10, 50, 70); // top left x, top left y, width, height

## Lines

### Draw a red line

    screen.beginPath();
    screen.moveTo(100, 50); // x, y
    screen.lineTo(150, 40); // x, y
    screen.closePath();

    screen.lineWidth = 5;
    screen.strokeStyle = "#ff0000";
    screen.stroke();

## Polygons

### Define a red triangle

    screen.beginPath();
    screen.moveTo(150, 150); // x, y
    screen.lineTo(200, 200); // x, y
    screen.lineTo(100, 200);
    screen.closePath();

### Draw its outline

    screen.lineWidth = 2;
    screen.strokeStyle = "#ff0000";
    screen.stroke();

### Fill it with a color

    screen.fillStyle = "#00ff00";
    screen.fill();

## Circles and arcs

### Define a red circle

    screen.beginPath();
    screen.arc(100, 100, 30, 0, Math.PI * 2); // center x, center y, radius,
                                              // start angle (radians), end angle
    screen.closePath();

### Draw its outline

    screen.strokeStyle = "#ff0000";
    screen.stroke();

### Fill it with a color

    screen.fillStyle = "#00ff00";
    screen.fill();
