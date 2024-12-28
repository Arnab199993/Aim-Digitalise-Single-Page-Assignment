const BookingsRoomsAndCustomer = () => {
  return (
    <div
      className="w-[40rem]  h-[10.5rem] border bg-gradient-to-r from-[#e5ebeb] to-[#cfd5d2] rounded-xl p-4 font-mono text-3xl "
      style={{
        boxShadow: "10px 10px 10px rgb(0,0,0,0.7)",
      }}
    >
      <div className="flex justify-between ">
        <h5>BOOKINGS</h5>
        <h5>ROOM</h5>
        <h5>CUSTOMERS</h5>
      </div>
      <div className="flex justify-between mt-4">
        <div
          className="h-20 w-20 rounded-full bg-[#b4b7b8] relative "
          style={{
            boxShadow: "5px 5px 5px rgb(0,0,0,0.7)",
          }}
        >
          <div className="h-12 w-12 rounded-full border-r-2 border-white bg-[#5c839b] inset-0 absolute m-auto text-white flex justify-center items-center">
            0
          </div>
        </div>
        <div
          className="h-20 w-20 rounded-full bg-[#b4b7b8] relative "
          style={{
            boxShadow: "5px 5px 5px rgb(0,0,0,0.7)",
          }}
        >
          <div className="h-12 w-12 rounded-full border-r-2 border-white bg-[#5c839b] inset-0 absolute m-auto text-white flex justify-center items-center">
            1
          </div>
        </div>
        <div
          className="h-20 w-20 rounded-full bg-[#b4b7b8] relative "
          style={{
            boxShadow: "5px 5px 5px rgb(0,0,0,0.7)",
          }}
        >
          <div className="h-12 w-12 rounded-full border-r-2 border-white bg-[#5c839b] inset-0 absolute m-auto text-white flex justify-center items-center">
            2
          </div>
        </div>
        <div
          className="h-20 w-20 rounded-full bg-[#b4b7b8] relative "
          style={{
            boxShadow: "5px 5px 5px rgb(0,0,0,0.7)",
          }}
        >
          <div className="h-12 w-12 rounded-full border-r-2 border-white bg-[#5c839b] inset-0 absolute m-auto text-white flex justify-center items-center">
            3
          </div>
        </div>
        <div
          className="h-20 w-20 rounded-full bg-[#b4b7b8] relative "
          style={{
            boxShadow: "5px 5px 5px rgb(0,0,0,0.7)",
          }}
        >
          <div className="h-12 w-12 rounded-full border-r-2 border-white bg-[#5c839b] inset-0 absolute m-auto text-white flex justify-center items-center">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsRoomsAndCustomer;
