export default function Die({ value, isHeld, hold }) {
  return (
    <button
      onClick={hold}
      className={`
      h-16
      w-16
      sm:h-20
      sm:w-20
      rounded-xl
      shadow-md
      text-3xl
      sm:text-4xl
      font-bold
      transition-all
      duration-200
      hover:scale-105
      active:scale-95

      ${isHeld ? "bg-green-400 text-white" : "bg-white text-slate-900"}
      `}
    >
      {value}
    </button>
  );
}
