import growth from "../../assets/growth.png";
const Growth = () => {
  return (
    <div
      className="border-l-2 h-32 w-20 rounded-md bg-gradient-to-r from-[#899398] to-[#869298] mt-4 p-2"
      style={{
        boxShadow: "15px 10px 10px rgb(0,0,0,0.7)",
      }}
    >
      <div className="flex justify-center items-center">
        <img className="" src={growth} height={40} width={40} />
      </div>
      <div className="text-center text-white">Growth</div>
      <div className="text-center text-3xl text-white font-semibold">2%</div>
    </div>
  );
};

export default Growth;
