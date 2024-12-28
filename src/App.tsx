import Booking from "./Components/Bookings/Bookings";
import BookingsRoomsAndCustomer from "./Components/BookingsRoomsAndCustomer/BookingsRoomsAndCustomer";
import CustomerBookRoom from "./Components/CustomerBookRoom/CustomerBookRoom";
import Dashboard from "./Components/Dashboard/DashBoard";
import Growth from "./Components/Growth/Growth";
import Header from "./Components/Header/Header";
import Room from "./Components/Rooms/Room";

const App = () => {
  return (
    <div className="p-10">
      <div className="w-full flex justify-center">
        <Header />
      </div>
      <div className="flex mt-6">
        <div className="w-[28%]">
          <Booking />
        </div>
        <div>
          <div className="flex justify-between">
            <div className="mr-4">
              <Dashboard />
            </div>
            <div>
              <CustomerBookRoom />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <BookingsRoomsAndCustomer />
            </div>
            <div className="flex justify-between gap-4 mr-6">
              <Growth />
              <Growth />
              <Growth />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Room />
      </div>
    </div>
  );
};

export default App;
