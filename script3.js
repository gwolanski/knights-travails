//This function creates an array variable, moveOptions, which contains every legal move that a knight can make without other considerations. 
function getAllMoveOptions() {
    //Spaces a knight can travel on the x-plane & y-plane.  
    let xOptions = [-2, -2, -1, -1, 1, 1, 2, 2];
    let yOptions = [-1, 1, -2, 2, -2, 2, -1, 1];

    const moveOptions = [];

    for (let i = 0; i < xOptions.length; i++) {
        moveOptions.push([xOptions[i], yOptions[i]]);  
    }

    return moveOptions;
}

function getLegalMoves(coordinates) {
    let allMoveOptions = getAllMoveOptions();

    let coordinateX = coordinates[0];
    let coordinateY = coordinates[1];

    //Minimum and maximum x & y coordinates on board. Coordinates must be >= 0 and <= 7.
    let xyMin = 0;
    let xyMax = 7;

    let legalMoves = [];

    //Cycles through each move option.
    for (let i = 0; i < allMoveOptions.length; i++) {
        //For each move option, add coordinateX + first index and coordinateY + second index.
        let currentOption = allMoveOptions[i];
        let newX = coordinateX + currentOption[0];
        let newY = coordinateY + currentOption[1];
        let newMove = [newX, newY];
        console.log("newMove:", newMove);
        //Check if both new coordinates are between 0 and 7. If true, push to legalMoves.
        if (newX >= xyMin && newX <= xyMax && newY >= xyMin && newY <= xyMax) {
            legalMoves.push(newMove);
        }
    }
    return legalMoves;
}

function getUnvisitedLegalMoves(currentCoordinates, visitedArray) {
    let legalMoves = getLegalMoves(currentCoordinates);
    let notVisited = [];

    for (let i = 0; i < legalMoves.length; i++) {
        let currentLegalX = legalMoves[i][0];
        let currentLegalY = legalMoves[i][1];

        const hasLegalMoveBeenVisited = visitedArray.some(node => {
            console.log("node: ", node);
            return (node[0] === currentLegalX && node[1] === currentLegalY);
        });
        console.log("hasLegalMoveBeenVisited: " + hasLegalMoveBeenVisited);
        if (!hasLegalMoveBeenVisited) {
            notVisited.push([currentLegalX, currentLegalY]);
        }
    }
    return notVisited;
}


function knightMoves(startingCoordinates, endingCoordinates) {
    let queue = [startingCoordinates];
    let visitedCoordinates = [];
    console.log("queue: ", queue);

    let unvisitedLegalMoves = getUnvisitedLegalMoves(startingCoordinates, visitedCoordinates);
    console.log("unvisitedLegalMoves: ", unvisitedLegalMoves)
    
    
}

knightMoves([0,0], [1,2]);