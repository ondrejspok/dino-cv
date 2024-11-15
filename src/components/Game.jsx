import { useEffect, useState } from "react";

const Game = () => {
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setGameOver(true), 5000);

        return () => clearTimeout(timer);
    }, []);

    const startGame = () => {
        setGameOver(false);
    };

    return (
        <div className="game-container">
            <h1>Dino Game</h1>
              <div className="game-area">
                {gameOver ? (
                <div className="game-over">
                    <h2>Game Over!</h2>
                    <button onClick={() => window.location.href = '/showcase'}>Go to My Showcase</button>
                </div>
        ) : (
          <button onClick={startGame}>Press Spacebar to Start Game</button>
        )}
            </div>
        </div>
    );
};

export default Game;