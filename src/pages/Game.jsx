import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
    const [dinoPosition, setDinoPosition] = useState(200); //vertical
    const [obstaclePosition, setObstaclePosition] = useState(800); //horizontal
    const [isJumping, setIsJumping] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const navigate = useNavigate();

    const handleJump = () => {
        if (!isJumping) {
            setIsJumping(true)
            let jumpHeight = 0;
        }
    }

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