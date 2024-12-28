import room1 from "../../assets/khadeeja-yasser-msFZE7d9KB4-unsplash.jpg";
import roo2 from "../../assets/felipepelaquim-1qvUsVrKrMI-unsplash.jpg";
const Room = () => {
  return (
    <div className="ml-12">
      <img
        style={{
          boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.7)",
        }}
        className="rounded-xl"
        src={room1}
        height={300}
        width={300}
      />
      <img
        style={{
          boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.7)",
        }}
        className="rounded-xl mt-4"
        src={roo2}
        height={300}
        width={300}
      />
    </div>
  );
};

export default Room;
