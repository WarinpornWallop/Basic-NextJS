"use client"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";



const PrincessPage = () => {
    const numRows = 6;
    const numCols = 8;
    const initialPlayer = { x: 0, y: 0 };
    const initialPrincess = { x: 7, y: 0 };
    const walls = [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 4 },
    ];
    const monsters = [
        { x: 2, y: 3 },
        { x: 4, y: 2 },
    ];
  const [grid, setGrid] = useState(createGrid());
  const [player, setPlayer] = useState(initialPlayer);

  function createGrid() {
    const grid = Array.from({ length: numRows }, () =>
      Array(numCols).fill(null)
    );
    walls.forEach((wall) => (grid[wall.y][wall.x] = "wall"));
    monsters.forEach((monster) => (grid[monster.y][monster.x] = "monster"));
    grid[initialPlayer.y][initialPlayer.x] = "player";
    grid[initialPrincess.y][initialPrincess.x] = "princess";
    return grid;
  }

  function bfs(start, goal) {
    const queue = [[start]];
    const visited = new Set();
    const directions = [
      { x: -1, y: 0, name: "left" },
      { x: 1, y: 0, name: "right" },
      { x: 0, y: -1, name: "up" },
      { x: 0, y: 1, name: "down" },
    ];

    while (queue.length > 0) {
      const path = queue.shift();
      const { x, y } = path[path.length - 1];

      if (x === goal.x && y === goal.y) {
        return path;
      }

      directions.forEach((direction) => {
        const newX = x + direction.x;
        const newY = y + direction.y;

        if (
          newX >= 0 &&
          newX < numCols &&
          newY >= 0 &&
          newY < numRows &&
          !visited.has(`${newX},${newY}`) &&
          grid[newY][newX] !== "wall" &&
          grid[newY][newX] !== "monster"
        ) {
          visited.add(`${newX},${newY}`);
          queue.push([...path, { x: newX, y: newY, name: direction.name }]);
        }
      });
    }

    return null;
  }

  function findPath() {
    const path = bfs(player, initialPrincess);
    if (path) {
      animatePath(path);
    } else {
      alert("No path found!");
    }
  }

  function animatePath(path) {
    let index = 0;

    function move() {
      if (index < path.length-1) {
        setGrid((prevGrid) => {
          const newGrid = prevGrid.map((row) => row.slice());
          newGrid[player.y][player.x] = null;
          const nextPos = path[index];
          setPlayer(nextPos); // Update player state
          newGrid[nextPos.y][nextPos.x] = "player";
          return newGrid;
        });
        index++;
        setTimeout(move, 500);
      } else {
        alert("You saved the princess!");
        restartGame();
      }
    }

    move();
  }

  function restartGame() {
    setGrid(createGrid());
    setPlayer(initialPlayer);
  }

  return (
    <div>
      <div className="bg-primary">
        <p className="text-6xl text-white font-bold py-16 px-8 h-60 grid content-center">
          Save the princess
        </p>
      </div>

      <div className="content mx-8 pt-8">
        <div className="gridtable">
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className={`cell ${cell}`} />
            ))
          )}
        </div>
        <button className="mt-3 btn btn-primary" onClick={findPath}>
          Find Path
        </button>
      </div>
    </div>
  );
};

export default PrincessPage;
