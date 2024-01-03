# knights-travails

This project was completed as part of the The Odin Project curriculum. The project directions can be found here: https://www.theodinproject.com/lessons/javascript-knights-travails

The main goal of this project was to put my recently acquired knowledge of search algorithms to the test with the goal of finding the shortest path a knight on a 8x8 chessboard could take to get from a starting point to an ending point.

I chose to solve this problem using a breadth first search (BFS) approach. My reasoning for choosing BFS over depth first search (DFS) was that by using BFS, once I hit the ending coordinates it will always be the shortest path. BFS is a much more efficient approach in this case because if using DFS, I would have had to find every possible path to the ending point and then cycle through each of the paths to see which path was the shortest. Conversely, a BFS approach has the ability to exit out of the code with all necessary info, like path and number of moves, as soon as the ending coordinates are found. This saves both space and time. 

Link to page: https://gwolanski.github.io/knights-travails/
*Note: Test out this project in the console. 
