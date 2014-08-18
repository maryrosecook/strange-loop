# Worksheet for Strange Loop workshop

## Mary livecodes Space Invaders

The code is in `space-invaders/space-invaders.js`.

To run the example code:

    $ cd retro-games/
    $ python -m SimpleHTTPServer 4000
    $ open space-invaders/index.html

## Performance profiling

* Open dev tools in Chrome.

* Go to the Profiles tab.

* Click Collect JavaScript CPU Profile.

* Run the game.

* Click the grey circle below the magnifying glass on the left.

* Let the game run for a bit.

* Click the grey circle again.

* Click on Profile 1 on the left.

* Note the percentages of CPU time and function names near the top of the
the Self column.

* Make those functions more efficient!

## Debugging frequently running code

It is possible to slow down game execution speed just by logging
debug output to the browser console.

Also, sometimes, a function is run so frequently that, when we try and
log anything, the log races past too fast for us to see.

    function update() {
      var interestingObj = {};
      console.log(interestingObj);
    };

We can solve this problem by forcing a runtime error:

    function update() {
      var interestingObj = {};
      console.log(interestingObj);
      throw "stop";
    };

## An architecture for simple games in words

These are not rules, just guidelines.

* index.html with canvas in it.

* game.js with code.

* All points/sizes are modelled as: { x: 5, y: 7 }.

* Game created with constructor function.

* Game constructor runs game loop.

* Game object has center and size.

* Game prototype has update() and draw().

* Each type of body has a constructor function.

* Each body constructor is passed the game object.

* Each body has center and (maybe) size.

* Each body prototype has update() and draw().

* Bodies are stored in one array on the game object.

* Collisions are determined centrally.  Colliding bodies are
notified they have collided by calling collision() on each one.

* Currently pressed keys are recorded by a module that can be
interrogated by the player object.

## An architecture for simple games in code

The `template/game.js` file contains the architecture
with all the actual game-specific code stripped out.  This file
might be a good starting point for your game.

## What game to make?

### Snake

Reasonably simple.  Probably the best example for focusing on the
architecture above and not getting bogged down in implementation details.

[img]

### Asteroids

Requries some trigonometry to work out when lines are intersecting.

[img]

### Lunar Lander

Requires some trigonometry to work out when lines are intersecting.  Also fiddly
because it must let the lander rest on a landing pad.

[img]

## How to get started

1. Get a black square drawing on the canvas.

2. Create a game tick function and get it running many times a second.

3. Make the black square move across the screen on its own.

4. Create a player body and get its update() and draw() functions running.

5. Use the keyboard to move the player around.

6. ...