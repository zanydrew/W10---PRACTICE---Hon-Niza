function GameOver({status, restartGame}) {
    return (
        <section className="container">
            <h2>Game Over!</h2>
            <h3>You lost!</h3>
            <h3>You won!</h3>
            <button>Start New Game</button>
        </section>
    );
}

export default GameOver;