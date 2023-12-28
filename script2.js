//This function creates an array variable, moveOptions, which contains every legal move that a knight can make. 
function getMoveOptions() {
    //Spaces a knight can travel on the x-plane & y-plane.  
    let xOptions = [-2, -2, -1, -1, 1, 1, 2, 2];
    let yOptions = [-1, 1, -2, 2, -2, 2, -1, 1];

    const moveOptions = [];

    for (let i = 0; i < xOptions.length; i++) {
        moveOptions.push([xOptions[i], yOptions[i]]);  
    }

    return moveOptions;
}

//Find all possible legal moves from specified coordinates that are >= 0 and <= 7.
function getLegalMoves(coordinates, options) {
    let coordinateX = coordinates[0];
    let coordinateY = coordinates[1];

    //Minimum and maximum x & y coordinates on board. Coordinates must be >= 0 and <= 7.
    let xyMin = 0;
    let xyMax = 7;

    let legalMoves = [];

    //Cycles through each move option.
    for (let i = 0; i < options.length; i++) {
        //For each move option, add coordinateX + first index and coordinateY + second index.
        let currentOption = options[i];
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

//Extract only the legal moves that haven't been visited previously
function extractNewMoves(legalMoves, visited) {
    let notVisited = [];
    console.log("visited.length: ",  visited.length);

    for (let i = 0; i < legalMoves.length; i++) {
        let currentLegalMove = legalMoves[i];
        let currentLegalX = currentLegalMove[0];
        let currentLegalY = currentLegalMove[1];

        const hasLegalMoveBeenVisited = visited.some(node => {
            // console.log("node: ", node);
            return (node[0] === currentLegalX && node[1] === currentLegalY);
        });
        // console.log("hasLegalMoveBeenVisited: " + hasLegalMoveBeenVisited);
        if (!hasLegalMoveBeenVisited) {
            notVisited.push(currentLegalMove);
        }
    }
    console.log("notVisited in extractNewMoves: ", notVisited)
    
    return notVisited;
}

function knightMoves(startingCoordinates, endingCoordinates) {
    let startingObject = {
        coordinates: startingCoordinates,
        path: null
    }
    
    startingObject.path = startingCoordinates;

    console.log("startingObject: ", startingObject);

    let visitedCoordinates = [];
    //something is grumpy about making an array of arrays. think of how to do something else
    let queue = [startingObject];
    console.log("starting queue: ", queue);
    
    let moveOptions = getMoveOptions();
    
    let currentCoordinates = startingObject;
    console.log("currentCoordinates[0]: ", currentCoordinates[0]);
    console.log("currentCoordinates[1]: ", currentCoordinates[1]);
    
    while (queue.length > 0) {
        console.log("queue in while b4 shift: ", queue);
        
        
        currentCoordinates = queue.shift();
        
        console.log("currentCoordinates in while2: ", currentCoordinates);
        console.log("currentCoordinates[0]: ", currentCoordinates[0]);
        console.log("currentCoordinates[1]: ", currentCoordinates[1]);
        
        console.log("queue in while after shift: ", queue);
        break;
        visitedCoordinates.push(currentCoordinates);
        console.log("visitedCoordinates in while: ", visitedCoordinates);
        if ((currentCoordinates[0] !== endingCoordinates[0]) || (currentCoordinates[1] !== endingCoordinates[1])) {

        }
        //Find all possible legal moves from the starting point that are >= 0 and <= 7.
        let legalMoves = getLegalMoves(currentCoordinates, moveOptions);
        console.log("legalMoves in while: ", legalMoves);
        
        //Check for legal moves that have not already been added to visitedCoordinates.
        let newMoves = extractNewMoves(legalMoves, visitedCoordinates);
        console.log("newMoves in while: ", newMoves);

        newMoves.forEach(move => {
            queue.push(move);
            console.log("queue in forEach: ", queue);
        })

        break;
    }
}

knightMoves([1, 2], [3, 3]);

//shift first item out of queue.
//set distance to 0 and predecessor remains null.
//find newMoves.
//set distance of newMoves to +1 and predecessor to current object.
//add these newMoves objects to the queue
