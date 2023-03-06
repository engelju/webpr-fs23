
const north = {dx:  0, dy: -1};
const east  = {dx:  1, dy:  0};
const south = {dx:  0, dy:  1};
const west  = {dx: -1, dy:  0};

let direction = north;

const clockwise = [north, east, south, west, north];
const countercw = [north, west, south, east, north];

let snake = [
    {x: 10, y: 5},
    {x: 10, y: 6},
    {x: 10, y: 7},
    {x: 10, y: 8},
];
let food = {x: 15, y: 15};

// function snakeEquals(a, b) {
//     return JSON.stringify(a) === JSON.stringify(b) 
// }
const snakeEquals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function changeDirection(orientation) {
    const currentIndex = orientation.indexOf(direction);
    const nextIndex = (currentIndex + 1) % orientation.length;
    direction = orientation[nextIndex];
}

function start() {
    // canvas to draw on
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    // key events
    const rightArrow = 39;
    const leftArrow  = 37;

    // assign function depending on key event
    window.onkeydown = evt => {
        const orientation = (evt.keyCode === rightArrow) ? clockwise : countercw;
        changeDirection(orientation);
    };

    // game loop
    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 5);
}

function nextBoard() {
    const maxX = 20;
    const maxY = 20;
    const oldHead = snake[0];

    function inBounds(x, max) {
        if (x < 0)   { return max - 1 }
        if (x > max) { return 0 }
        return x
    }

    const newHead = {
        x: inBounds(oldHead.x + direction.dx, maxX),
        y: inBounds(oldHead.y + direction.dy, maxY)
    };

    // have we found any food?
    if (snakeEquals(food, newHead)) {  
        // place new food at random location
        food.x = Math.floor(Math.random() * 20);
        food.y = Math.floor(Math.random() * 20);

    } else {
        // no food found => no growth despite new head => remove last element
        snake.pop();
    }

    // put head at front of the list
    snake.unshift(newHead);
}

function display(context) {
    // clear
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw all elements
    context.fillStyle = "cyan";
    snake.forEach(element =>
        fillBox(context, element)
    );
    context.fillStyle = "green";
    fillBox(context, snake[0]);

    // draw food
    context.fillStyle = "red";
    fillBox(context, food);
}

function fillBox(context, element) {
    context.fillRect(element.x * 20 + 1, element.y * 20 + 1, 18, 18);
}


