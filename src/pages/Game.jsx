import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
    const [dinoPosition, setDinoPosition] = useState(200); //vertical
    const [obstaclePosition, setObstaclePosition] = useState(800); //horizontal
    const [isJumping, setIsJumping] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const navigate = useNavigate();

    // jump physics
    const handleJump = () => {
        if (!isJumping) {
            setIsJumping(true)
            let jumpHeight = 0;
        }

        const jumpInterval = setInterval(() => {
            if (jumpHeight >= 100) {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (jumpHeight >=0) {
                        clearInterval(fallInterval);
                        setIsJumping(false);
                    } else {
                        jumpHeight =-10;
                        setDinoPosition(200-jumpHeight);
                    }
                }, 50);
            } else {
                jumpHeight += 10;
                setDinoPosition(200-jumpHeight);
            }
        }, 50);
    };

    // obstacle horizontal movement + reset "new" obstacle
    useEffect(() => {
        const interval = setInterval(() => {
          setObstaclePosition((prev) => {
            if (prev <= 0) return 800; // new obstacle
            return prev - 10;
          });
        }, 50);
    

    // gameover if obstacle colides with dino
    if (
        obstaclePosition > 50 &&
        obstaclePosition < 150 &&
        dinoPosition >= 200)
    {
        setGameOver(true);
        clearInterval(interval);
    }

    return () => clearInterval(interval);
    }, [obstaclePosition, dinoPosition]);

    useEffect(() => {
        const timer = setTimeout(() => setGameOver(true), 5000);

        return () => clearTimeout(timer);
    }, []);

    const startGame = () => {
        setGameOver(false);
    };

useEffect(() => {
  const handleSpacebarDown = (event) => {
    if (event.code === 'Space') handleJump();
  };

  window.addEventListener('keydown', handleSpacebarDown);
  return () => window.removeEventListener('keydown', handleSpacebarDown);
}, []);

    return (
        <div className="game-container">
            <h1>Dino Game</h1>
              <div className="game-area">
                <div className="dino" style={{bottom: `${dinoPosition}px`}} />
                <div className="obstacle" style={{left : `${obstaclePosition}px`}}/>
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