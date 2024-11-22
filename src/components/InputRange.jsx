export const InputRange = ({ value, min = 0, max, action }) => {
  return (
    <>
      <input
        type="range"
        className="h-1 w-full max-w-96 rounded-full appearance-none bg-gray-200 range-slider hover:cursor-pointer"
        value={value}
        min={min}
        max={max}
        step="1"
        onChange={action}
        style={{
          background: `linear-gradient(to right, #000 0%, #000 ${(value / max) * 100}%, #e5e7eb ${(value / max) * 100}%, #e5e7eb 100%)`,
        }}
      />

      <style>
      {`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          background-color: #000; /* Color de la bolita */
          border: 2px solid #000; /* Borde de la bolita */
          border-radius: 9999px; /* Bolita redonda */
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2); /* Efecto de hover */
        }

        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  )
}
