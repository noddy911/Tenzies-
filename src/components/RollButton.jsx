export default function RollButton({ onClick, gameWon }) {
  return (
    <button
      onClick={onClick}
      className="
      px-14
      py-4
      rounded-lg
      bg-indigo-600
      hover:bg-indigo-700
      active:scale-95
      text-white
      text-xl
      font-semibold
      shadow-xl
      transition-all
      duration-200
      "
    >
      {gameWon ? "New Game" : "Roll"}
    </button>
  );
}
