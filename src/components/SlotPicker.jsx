export default function SlotPicker({ timeSlots, bookedSlots, selected, onSelect }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {timeSlots.map((time) => {
        const isBooked = bookedSlots.includes(time);
        const isSelected = selected.includes(time);

        return (
          <button
            key={time}
            disabled={isBooked}
            onClick={() => onSelect(time)}
            className={`py-2 rounded border text-sm
              ${isBooked ? "bg-gray-200 text-gray-400 cursor-not-allowed" : ""}
              ${isSelected ? "bg-red-600 text-white border-red-600" : ""}
              ${!isBooked && !isSelected ? "bg-white hover:bg-red-50" : ""}`}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
}