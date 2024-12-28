import DonoughtChart from "../Donught/DonoughtChart/DonoughtChart";
import GraphChart from "../GraphChart/GraphChart";

const Dashboard = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#88999f] to-[#697780] h-[15rem] w-[40rem] flex flex-col items-center  rounded-2xl justify-center px-4 mt-4 border-l-2 border-white "
      style={{
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="flex w-full justify-center gap-4">
        <DonoughtChart />
        <GraphChart />
      </div>
    </div>
  );
};

export default Dashboard;
