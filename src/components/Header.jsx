export default function Header(props) {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold text-slate-900">Tenzies</h1>

      <p className="mt-5 max-w-lg mx-auto text-gray-700 text-lg leading-relaxed">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {props.gameWon && (
        <div className="mt-6 text-center">
          <h2
            className="
      animate-pulse
      text-5xl
      font-black
      text-transparent
      bg-linear-to-r
      from-green-500
      via-yellow-400
      to-pink-500
      bg-clip-text
      drop-shadow-lg
      "
          >
            🎉 YOU WON! 🎉
          </h2>

          <p className="mt-3 text-gray-700 font-medium">
            Amazing! All dice match.
          </p>
        </div>
      )}
    </header>
  );
}
