const CustomerBookRoom = () => {
  return (
    <div
      className="p-2 h-[14.8rem] w-[18rem] border m-5 bg-gradient-to-r from-[#d4dddf] to-[#c4c5c5] rounded-xl "
      style={{
        boxShadow: "17px 10px 10px rgb(0,0,0,0.7)",
      }}
    >
      <div className="flex justify-between">
        <div className="text-3xl font-mono font-medium">
          CUSTOMERS
          <span>
            <div> BOOK ROOM</div>
          </span>
        </div>
        <input
          className="w-20 h-6 bg-[#6d757b] rounded-md text-white"
          type="text"
        />
      </div>
      <table className="border-collapse w-full">
        {/* <thead>
          <tr>
            <th className="border-b border-gray-600 p-2">Room Number</th>
            <th className="border-b border-gray-600 p-2">Room Type</th>
            <th className="border-b border-gray-600 p-2">Availability</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td className="border-b border-gray-600 p-2">101</td>
            <td className="border-b border-gray-600 p-2">Deluxe</td>
            <td className="border-b border-gray-600 p-2">Available</td>
          </tr>
          <tr>
            <td className="border-b border-gray-600 p-2">102</td>
            <td className="border-b border-gray-600 p-2">Normal</td>
            <td className="border-b border-gray-600 p-2">Not Available</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-between text-white font-semibold ">
        <button className="p-2 bg-gradient-to-r from-[#5a9cc0] to-[#4c83a0] rounded-2xl w-32">
          Book Room
        </button>
        <button className="p-2 bg-gradient-to-r from-[#f97c93] to-[#f16b72] rounded-2xl  w-32">
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default CustomerBookRoom;
