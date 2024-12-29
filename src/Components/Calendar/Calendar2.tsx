const Calendar1 = () => {
  return (
    <div
      className="w-56 h-48 bg-gradient-to-r from-[#838b90] to-[#606672] rounded-xl ml-4  text-center mt-8"
      style={{
        boxShadow: "13px 13px 10px rgb(0,0,0,0.7)",
      }}
    >
      <div className="text-white">Calendar</div>
      <div className="flex  font-mono text-2xl ">
        <div className="h-8 w-14 border border-black bg-[#afd4e3] text-white">
          Sun
        </div>
        <div className="h-8 w-14 border border-black bg-[#afd4e3] text-white">
          Mon
        </div>
        <div className="h-8 w-14 border border-black bg-[#afd4e3] text-white">
          Tue
        </div>
        <div className="h-8 w-14 border border-black bg-[#afd4e3] text-white">
          Wed
        </div>
      </div>
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">1</div>
        <div className="h-8 w-14 border border-black  bg-[#e1e5e4]">2</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">3</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">4</div>
      </div>
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">5</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">6</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">7</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">8</div>
      </div>
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">9</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">14</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">11</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">12</div>
      </div>
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">9</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">14</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">11</div>
        <div className="h-8 w-14 border border-black bg-[#e1e5e4]">12</div>
      </div>
    </div>
  );
};

export default Calendar1;
