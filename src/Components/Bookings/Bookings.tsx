import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import HotelLook from "../../assets/HotelLook.jpg";
import Divider from "../Divider/Divider";
import CardFooter from "../Card/CardFooter";
import PrimaryBtn from "../Btn/PrimaryBtn";
import wifi from "../../assets/wifi.png";
import breakfast from "../../assets/breakfast.png";
import standDardRoom from "../../assets/room.png";
import suite from "../../assets/suite.png";
import pool from "../../assets/swimming.png";
import hotel from "../../assets/hotel.png";

const Booking = () => {
  return (
    <div className="flex justify-center">
      <Card>
        <header>
          <CardHeader title="Bookings" leftImage={hotel} rightImage={hotel} />
        </header>
        <main>
          <CardBody>
            <div className="relative">
              <img
                src={HotelLook}
                alt="Hotel"
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 text-white text-sm font-bold">
                <p>Your Perfect Stay, Just a Click Away!</p>
              </div>
            </div>
            <div className="flex">
              <div className="p-3">
                <div className="font-bold mb-2 text-sm">Basic</div>
                <ul className="list-none text-gray-700 text-xs">
                  <li className="flex items-center mb-1">
                    <img src={wifi} alt="Wi-Fi" className="w-4 h-4 mr-2" />
                    Free Wi-Fi
                  </li>
                  <li className="flex items-center mb-1">
                    <img
                      src={breakfast}
                      alt="Breakfast"
                      className="w-4 h-4 mr-2"
                    />
                    Complimentary Breakfast
                  </li>
                  <li className="flex items-center mb-1">
                    <img
                      src={standDardRoom}
                      alt="Standard Room"
                      className="w-4 h-4 mr-2"
                    />
                    Standard Room
                  </li>
                </ul>
              </div>
              <Divider />
              <div className="p-3">
                <div className="font-bold mb-2 text-sm">Premium</div>
                <ul className="list-none text-gray-700 text-xs">
                  <li className="flex items-center mb-1">
                    <img src={wifi} alt="Wi-Fi" className="w-4 h-4 mr-2" />
                    Free Wi-Fi
                  </li>
                  <li className="flex items-center mb-1">
                    <img
                      src={breakfast}
                      alt="Breakfast"
                      className="w-4 h-4 mr-2"
                    />
                    Continental Breakfast
                  </li>
                  <li className="flex items-center mb-1">
                    <img
                      src={suite}
                      alt="Suite Room"
                      className="w-4 h-4 mr-2"
                    />
                    Suite Room
                  </li>
                  <li className="flex items-center mb-1">
                    <img src={pool} alt="Pool & Gym" className="w-4 h-4 mr-2" />
                    Access to Pool & Gym
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
          <footer>
            <CardFooter>
              <div className="flex justify-between">
                <PrimaryBtn>Sign Up</PrimaryBtn>
                <PrimaryBtn>Login</PrimaryBtn>
              </div>
            </CardFooter>
          </footer>
        </main>
      </Card>
    </div>
  );
};

export default Booking;
