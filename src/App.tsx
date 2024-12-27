import Booking from "./Components/Bookings/Bookings";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="p-10 flex flex-col items-center">
      <div className="w-full flex justify-center">
        <Header />
      </div>
      <div className="w-full mt-8 flex justify-center">
        <div className="p-4">
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default App;
