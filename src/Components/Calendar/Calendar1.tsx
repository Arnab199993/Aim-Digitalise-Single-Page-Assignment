const Calendar1 = () => {
  return (
    <div
      className="w-52 h-48 bg-gradient-to-r from-[#e0e2dc] to-[#ced4d1] rounded-xl ml-4 p-2 text-center"
      style={{
        boxShadow: "13px 13px 10px rgb(0,0,0,0.7)",
      }}
    >
      Calendar
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-10 border border-black bg-[#93a1a9] text-white">
          0
        </div>
        <div className="h-8 w-10 border border-black bg-[#93a1a9] text-white">
          0
        </div>
        <div className="h-8 w-10 border border-black bg-[#93a1a9] text-white">
          0
        </div>
        <div className="h-8 w-10 border border-black bg-[#93a1a9] text-white">
          0
        </div>
      </div>
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-10 border border-black">1</div>
        <div className="h-8 w-10 border border-black">2</div>
        <div className="h-8 w-10 border border-black">3</div>
        <div className="h-8 w-10 border border-black">4</div>
      </div>
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-10 border border-black">5</div>
        <div className="h-8 w-10 border border-black">6</div>
        <div className="h-8 w-10 border border-black">7</div>
        <div className="h-8 w-10 border border-black">8</div>
      </div>
      <div className="flex justify-center font-mono text-2xl">
        <div className="h-8 w-10 border border-black">9</div>
        <div className="h-8 w-10 border border-black">10</div>
        <div className="h-8 w-10 border border-black">11</div>
        <div className="h-8 w-10 border border-black">12</div>
      </div>
    </div>
  );
};

export default Calendar1;
