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
//This function creates an array variable, legalMoves, that slims down the moveOptions result from above if outside the bounds of an 8x8 chessboard.
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
  
        //Check if both new coordinates are between 0 and 7. If true, push to legalMoves.
        if (newX >= xyMin && newX <= xyMax && newY >= xyMin && newY <= xyMax) {
            legalMoves.push(newMove);
        }
    }
    return legalMoves;
}

function getUnvisitedLegalMoves(currentCoordinates, visitedArray) {
    let legalMoves = getLegalMoves(currentCoordinates);
    console.log("legalMoves: " + legalMoves);
    let notVisited = [];

    for (let i = 0; i < legalMoves.length; i++) {
        let currentLegalX = legalMoves[i][0];
        let currentLegalY = legalMoves[i][1];
        console.log("current legalMove: ", legalMoves[i]);
        console.log("visitedArray: " + visitedArray);

        const hasLegalMoveBeenVisited = visitedArray.some(node => {
            console.log("node: ", node);
            console.log((node[0] === currentLegalX && node[1] === currentLegalY));
            return (node[0] === currentLegalX && node[1] === currentLegalY);
        });
        console.log("hasLegalMoveBeenVisited: " + hasLegalMoveBeenVisited);
        if (!hasLegalMoveBeenVisited) {
            notVisited.push([currentLegalX, currentLegalY]);
        }
        console.log("notVisited: " + notVisited);
    }

    return notVisited;
}


function knightMoves(startingCoordinates, endingCoordinates) {
    let visitedCoordinates = [];

    let queue = [startingCoordinates];
    console.log("queue: "+ queue);

    while (queue.length > 0) {
        let current = queue.shift();
        console.log("current: "+ current);
        visitedCoordinates.push(current);

        if (current[0] === endingCoordinates[0] && current[1] === endingCoordinates[1]){
            console.log("endindCoordinates?:", current);
            console.log("You've made it in # moves. Here is your path:")
            return;
        }

        let unvisitedLegalMoves = getUnvisitedLegalMoves(current, visitedCoordinates);
        console.log("unvisitedLegalMoves: ", unvisitedLegalMoves);

        unvisitedLegalMoves.forEach((move) => {
            const isUnvisitedInQueue =  queue.some(node => {
                return (move === node)
            });
            if (!isUnvisitedInQueue) {
                console.log("move: ", move);
                queue.push(move);
            }
        })
        
        console.log("queue while: "+ queue)
    }   
}

knightMoves([0,0], [3,3]);