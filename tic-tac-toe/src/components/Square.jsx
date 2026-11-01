
function Square({ value, index, onClick, disabled, isWinning }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`Políčko ${index + 1}: ${value || 'prázdné'}`}
      className={`
        aspect-square w-full rounded-md bg-gray-800
        text-6xl font-light transition-colors duration-200
        hover:bg-gray-700 disabled:cursor-not-allowed
        ${value === 'X' ? 'text-white' : 'text-slate-400'}
        ${isWinning ? 'bg-green-700 hover:bg-green-700' : ''}
      `}
    >
      {value}
    </button>
  )
}

export default Square
