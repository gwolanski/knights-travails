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
function getLegalMoves(currentCoordinates) {
    let allMoveOptions = getAllMoveOptions();

    let coordinateX = currentCoordinates[0];
    let coordinateY = currentCoordinates[1];

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

//This function creates an array variable, notVisited, that slims down the legalMoves result from above to contain only coordinates that haven't been previously visited.
function getUnvisitedLegalMoves(currentCoordinates, visitedArray) {
    let legalMoves = getLegalMoves(currentCoordinates);
    let notVisited = [];

    for (let i = 0; i < legalMoves.length; i++) {
        let currentLegalX = legalMoves[i][0];
        let currentLegalY = legalMoves[i][1];

        const hasLegalMoveBeenVisited = visitedArray.some(node => {
            return (node[0] === currentLegalX && node[1] === currentLegalY);
        });

        if (!hasLegalMoveBeenVisited) {
            notVisited.push([currentLegalX, currentLegalY]);
        }
    }

    return notVisited;
}


function knightMoves(startingCoordinates, endingCoordinates) {
    let visitedCoordinates = [];

    let startingObject = {
        coordinates: startingCoordinates,
        path: `[${startingCoordinates}]`,
        moves: 0
    }

    let queue = [startingObject];

    while (queue.length > 0) {
        let current = queue.shift();
        visitedCoordinates.push(current);

        if (current.coordinates[0] === endingCoordinates[0] && current.coordinates[1] === endingCoordinates[1]){
            console.log(`You've made it in ${current.moves} move(s).`);
            console.log(`Here is your path: ${current.path}`)
            return;
        }

        let unvisitedLegalMoves = getUnvisitedLegalMoves(current.coordinates, visitedCoordinates);

        unvisitedLegalMoves.forEach((move) => {
            const isUnvisitedInQueue =  queue.some(node => {
                return (move === node.coordinates)
            });
            if (!isUnvisitedInQueue) {
                let moveObject = {
                    coordinates: move,
                    path: `${current.path} -> [${move}]`,
                    moves: current.moves + 1
                }
                
                queue.push(moveObject);
            }
        })
    }   
}

knightMoves([3,3],[7,7]);