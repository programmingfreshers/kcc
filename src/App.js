import "./App.css";
import Chatbot from "./chatbot/Chatbot";
import Crop from "./components/Crop";
import Navbar from "./components/Navbar";

function App() {
  var cropData = [
    {
      cropName: "wheat",
      cropCost: "100",
      cropYield: "10",
    },
    {
      cropName: "rice",
      cropCost: "120",
      cropYield: "9",
    },
    {
      cropName: "soyabean",
      cropCost: "80",
      cropYield: "12",
    },

  ];
  return (
    <>
      <Chatbot />
      <Navbar />
      <Crop cropData={cropData} />
    </>
  );
}

export default App;
