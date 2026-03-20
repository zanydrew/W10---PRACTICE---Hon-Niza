import React from "react";
import Entity from "./Entity.jsx";
import GameOver from "./GameOver.jsx";
import Log from "./Log.jsx";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

// this Game component will return every other Game material components

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------

  const [playerHealth, setPlayerHealth] = React.useState(100);
  const [monsterHealth, setMonsterHealth] = React.useState(100);
  const [log, setLog] = React.useState([]);
  const [turn, setTurn] = React.useState(0);

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  function addLog(log){
    setLog((prev) => [log,  ...prev]);
  }

  function handleAttack(){
    const damage = getRandomValue(5,12);
    const monsterDamage = getRandomValue(8,15);

    setMonsterHealth((prev) => Math.max(prev-damage, 0));
    setPlayerHealth(prev => Math.max(prev-monsterDamage, 0));

    addLog(createLogAttack(true, damage));
    addLog(createLogAttack(false, monsterDamage));

    setTurn((prev) => prev+1);

  }

  function handleSpecialAttack(){
    if (turn % 3 !== 0) return;

    const damage = getRandomValue(10, 25);
    const monsterDamage = getRandomValue(8, 15);

    setMonsterHealth((prev) => Math.max(prev - damage, 0));
    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));

    addLog(createLogAttack(true, damage));
    addLog(createLogAttack(false, monsterDamage));

    setTurn((prev) => prev + 1);
  }

  function handleHeal(){
    const heal = getRandomValue(8, 20);
    const monsterDamage = getRandomValue(8, 15);

    setPlayerHealth(prev => Math.max(prev + heal, 100));
    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));

    addLog(createLogHeal(heal));
    addLog(createLogAttack(false, monsterDamage));

    setTurn((prev) => prev+1);
  }

  function handleSurrender (){
    setPlayerHealth(0);
  }

  function restartGame(){
    setPlayerHealth(100);
    setMonsterHealth(100);
    setLog([]);
    setTurn(0);
  }
  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  function renderControl(isGameOver){
    if (isGameOver){
      return null;
    }

    return (
        <section className="container">
          <button onClick={handleAttack}>ATTACK</button>
          <button onClick={handleSpecialAttack} disabled={turn %3 !==0}>SPECIAL</button>
          <button onClick={handleHeal}>HEAL</button>
          <button onClick={handleSurrender}>KILL YOURSELF</button>
        </section>
    )
  }

  function renderGameOver(result) {
    if (!result) return null;
    return (
        <GameOver title={result} restartGame={restartGame}/>
    )
  }

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------

  let result = null;

  if (playerHealth <= 0 && monsterHealth <= 0) {
    result = "Draw!";
  } else if (playerHealth <= 0 ) {
    result = "You lost!";
  } else if (monsterHealth <= 0) {
    result = "You won!";
  }

  const isGameOver = result !== null
  return <>
    <Entity entity_name="Your Health" entity_health={playerHealth} />
    <Entity entity_name="Monster Health" entity_health={monsterHealth} />

    {renderControl(isGameOver)}
    {renderGameOver(result)}

  <Log logs={log} />
  </>;
}

export default Game;
