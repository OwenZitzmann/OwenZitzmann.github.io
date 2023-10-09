$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
   
   
   
    createPlatform(700, 620, 200, 40)
    createPlatform(710, 0, 40, 230)
    createPlatform(900, 490, 40, 40)
    createPlatform(1250, 550, 40, 40)
    createPlatform(860,  650, 40, 105)
    createPlatform(1365, 425, 40, 40)
    createPlatform(500, 370, 200, 40)
    createPlatform(1230, 320, 40, 40)
    createPlatform(870,  300, 70, 40)
    createPlatform(750,  190, 70, 40)
    createPlatform(0, 620, 700, 40)
    createPlatform(120, 220, 130, 40)
    createPlatform(100, 60, 40, 200)
    createPlatform(1325, 200, 100, 40)
    createPlatform(670, 220, 80, 40)
    createPlatform(500, 310, 60, 60)
    createPlatform(210, 100, 40, 160)
    createPlatform(250, 100, 300, 40)



    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable('coin', 765, 120, 0.1,1)
    createCollectable('coin', 1335, 130, 0.1,1)
    createCollectable('coin', 155, 150, 0.1,1)
    createCollectable('coin', 60, 330, 0,0)
    createCollectable('coin', 60, 280, 0,0)
    createCollectable('coin', 60, 380, 0,0)
    createCollectable('coin', 60, 430, 0,0)
    createCollectable('coin', 60, 180, 0,0)
    createCollectable('coin', 60, 230, 0,0)
    createCollectable('coin', 60, 480, 0,0)
    createCollectable('coin', 60, 520, 0,0)
    createCollectable('coin', 60, 570, 0,0)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon('right', 700, 4, 150, 10)
    createCannon('bottom', 240, 800, 30, 30)
    createCannon('bottom', 390, 800, 30, 30)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
