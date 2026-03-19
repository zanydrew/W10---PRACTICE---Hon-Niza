import React from "react";
import Entity from "./Entity.jsx";

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

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return <>
    <Entity entity_name="Your Health" entity_health={playerHealth} />
    <Entity entity_name="Monster Health" entity_health={monsterHealth} />
  </>;
}

export default Game;
