class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.path = null;
    }
}

class KnightSolution {
    constructor() {
        this.rootCoordinate = null;
    }

    findMoveOptions() {
        //This portion of the code creates an array variable, moveOptions, which contains every legal move that a knight can make. 
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
    findLegalMoves(coordinates, options) {
        let coordinateX = coordinates.x;
        let coordinateY = coordinates.y;

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
    extractNewMoves(legalMoves, visited, currentNode) {
        let notVisited = [];
        console.log("visited.length: ",  visited.length);
    
        for (let i = 0; i < legalMoves.length; i++) {
            let currentLegalMove = legalMoves[i];
            let currentLegalMoveCoordinates = new Coordinates(currentLegalMove[0], currentLegalMove[1]);

            currentLegalMoveCoordinates.path = currentNode.path.concat([currentLegalMoveCoordinates]);
            console.log("currentLegalMoveCoordinates: ", currentLegalMoveCoordinates);

            const hasLegalMoveBeenVisited = visited.some(node => {
                console.log("node: ", node);
                return node.x === currentLegalMoveCoordinates.x && node.y === currentLegalMoveCoordinates.y;
            });
            console.log("hasLegalMoveBeenVisited: " + hasLegalMoveBeenVisited);
            if (!hasLegalMoveBeenVisited) {
                notVisited.push(currentLegalMoveCoordinates);
            }

            // for (let j = 0; j < visited.length; j++) {
            //     let currentVisited = visited[j];
            //     console.log("currentVisited: ", currentVisited);
            //     let visitedX = currentVisited[0];
            //     let visitedY = currentVisited[1];
            //     //Compare the x and y values of both legalMoves[i] and visited[j]. Only add coordinates from legalMoves to notVisited if they are unique.
            //     if (legalX !== visitedX && legalY !== visitedY) {
            //         notVisited.push(currentLegalMove);
            //     }
            // }
        }
        console.log("notVisited in extractNewMoves: ", notVisited)
        
        return notVisited;
    }

    knightMoves(startingLocation, endingLocation) {
        let endingCoordinates = new Coordinates(endingLocation[0],endingLocation[1]);

        let moveOptions = this.findMoveOptions();

        //declare start of list as being the starting coordinates
        //not sure if it will be necessary to have a root
        if (this.rootCoordinate === null) {
           this.rootCoordinate = startingLocation; 
        }
        
        let visitedCoordinates = [];
        console.log("visitedCoordinates b4: ", visitedCoordinates);
        //Variable that will store all coordinate nodes that need to be visited in breadth first order.
        let queue = [this.rootCoordinate];
        

        //BFS logic to search the tree. As node is visited, take it out of queue and place it in visitedCoordinates.
        let current = queue.shift();
    
        let currentCoordinates = new Coordinates(current[0], current[1]);
        currentCoordinates.path = `[${currentCoordinates.x}, ${currentCoordinates.y}]`;
        console.log("currentCoordinates b4 while: ", currentCoordinates);
        console.log("endingCoordinates: ", endingCoordinates);
        let test = 0;
        
        console.log("++++++++++++++++++++++++++++++++ START WHILE ++++++++++++++++++++++++++++++");

        // May i suggest you change this while statement to this:
        // !((current.x === ending.x) && (current.y === ending.y))
        // which suggests to have the while statement run until the ending is hit
        while (!((currentCoordinates.x === endingCoordinates.x) && (currentCoordinates.y === endingCoordinates.y))) {
            console.log("visitedCoordinates b4 in while: ", visitedCoordinates);
            visitedCoordinates.push(currentCoordinates);
            console.log("visitedCoordinates in while: ", visitedCoordinates);
            console.log("currentCoordinates in while: ", currentCoordinates);
            
            //Find all possible legal moves from the starting point that are >= 0 and <= 7.
            let currentLegalMoves = this.findLegalMoves(currentCoordinates, moveOptions);
            console.log("currentLegalMoves: ",  currentLegalMoves);
        
            //Check for legal moves that have not already been added to visitedCoordinates.
            let newMoves = this.extractNewMoves(currentLegalMoves, visitedCoordinates, currentCoordinates);
            console.log("newMoves: ",  newMoves);

            newMoves.forEach(move => {
                // let node = new Coordinates(move[0], move[1]);
                // node.path = currentCoordinates.path.concat([move]);
                queue.push(move);
                console.log("queue in forEach: ", queue)
            })
            console.log("queue in while loop: ", queue);

            if (queue.length > 0) {
                current = queue.shift();
                currentCoordinates = new Coordinates(current[0], current[1]);
            } 
        
            console.log("current after: ", current);
            if(test > 2) {
                break;
            }
            test++;
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        }

        console.log("You made it");
        console.log("currentCoordinates.path: ", currentCoordinates.path)


            //     //Add all moves to the queue if they are both legal and have not been visited yet.
            //     queue.push(...newMoves);    

            console.log("queue: ", queue) 

    }
}

let newSolution = new KnightSolution();
newSolution.knightMoves([0,0], [3,3]);


        //order of operations:
        //DONE - first you take the starting coordinates, set moves to 0, push them into the queue. 
        //DONE - shift the starting coordinates out of the queue. 
        //DONE - check if it == endingCoordinates ; if true, return; if false, find legal moves, then extract newMoves
        //convert newMoves to coordinates, set moves to 1, set predecessor to starting coordinates, push into the queue;
        //one at a time, shift newMoves[i] out of the queue, check if it == endingCoordinates ; if true, return; if false, find legal moves, then extract newMoves
        //convert newMoves to coordinates, set moves to 2, set predecessor to previous node, push into queue;
        //continue this 


        //maybe first you would build the full list that contains all possible moves starting from a specified starting point
        //then, use BFS to search through the list until it finds all instances ending at the specified ending point
        //or we may need to reassess to see if we can get big o to be smaller

        //starting from startCoordinates, search for all children of that node.
        //increase moves counter
        //once those children have been searched for endCoordinates, search for all children of that node.
        //increase moves counter

///something to try: make the queue an array of arrays. level 0 of BFS is starting point and is it's own array. level 1 of BFS is first round of legal moves and is it's own array. and so on. 
//each time an array is shifted out of the queue, add +1 move

// !! seems like I should add a path key to my Coordinates class so I can keep track of the path being taken. 
//i think if I'm doing BFS, i don't necessarily need to keep track of move # bc I will find a solution and be able to determine move # by looking at the path length