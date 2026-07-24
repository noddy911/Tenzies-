import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import generateDice from "./utils/generateDice";

import Header from "./components/Header";
import Die from "./components/Die";
import RollButton from "./components/RollButton";

export default function App() {
  const [dice, setDice] = useState(generateDice());

  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);

    const firstValue = dice[0].value;

    const sameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && sameValue) {
      setGameWon(true);
    }
  }, [dice]);

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die,
      ),
    );
  }

  function rollDice() {
    if (gameWon) {
      setDice(generateDice());
      setGameWon(false);
      return;
    }

    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
            },
      ),
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-5">
      {gameWon && <Confetti recycle={false} />}

      <main
        className="
        bg-gray-100
        rounded-xl
        shadow-2xl
        w-full
        max-w-3xl
        p-8
        md:p-12
        "
      >
        <Header gameWon={gameWon} />

        <section
          className="
          mt-12
          grid
          grid-cols-2
          sm:grid-cols-5
          gap-5
          justify-items-center
          "
        >
          {dice.map((die) => (
            <Die
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              hold={() => holdDice(die.id)}
            />
          ))}
        </section>

        <div className="mt-14 flex justify-center">
          <RollButton onClick={rollDice} gameWon={gameWon} />
        </div>
      </main>
    </div>
  );
}
