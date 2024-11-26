import React from "react";

const Calendar = () => {
  const today = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentWeekDay = daysOfWeek[today.getDay()];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="p-6 rounded-lg shadow-md">
        <div className="text-center">
          <div className="text-xl font-bold text-gray-700">
            {months[currentMonth]} {currentYear}
          </div>
          <div className="text-gray-500">{currentWeekDay}</div>
        </div>

        <div className="grid grid-cols-7 gap-2 mt-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-sm font-medium text-gray-500 text-center">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mt-2">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                day === currentDay
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
