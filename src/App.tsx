import Booking from "./Components/Bookings/Bookings";
import BookingsRoomsAndCustomer from "./Components/BookingsRoomsAndCustomer/BookingsRoomsAndCustomer";
import CustomerBookRoom from "./Components/CustomerBookRoom/CustomerBookRoom";
import Dashboard from "./Components/Dashboard/DashBoard";
import AreaChart from "./Components/AreaChart/AreaChart";
import Growth from "./Components/Growth/Growth";
import Header from "./Components/Header/Header";
import Room from "./Components/Rooms/Room";
import Achievements from "./Components/Achievements/Achievements";
import Ocalytics from "./Components/Ocalytics/Ocalytics";
import Calendar1 from "./Components/Calendar/Calendar1";
import Calendar2 from "./Components/Calendar/Calendar2";
import Ios from "./Components/Ios/Ios";

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
        <div className="flex">
          <Room />
          <div className="grid grid-cols-3  w-full p-4 ">
            <AreaChart />
            <Achievements />
            <Ocalytics />
            <Calendar1 />
            <Ios />
            <Calendar2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
