function ResetButton({ onReset }) {
    return (
      <button
        type="button"
        onClick={onReset}
        className="w-full py-3 text-lg text-white border rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200"
      >
        New Game
      </button>
    )
  }
  
  export default ResetButton