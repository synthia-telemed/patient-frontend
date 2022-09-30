import { useState } from "react";
import MedicineTab from "./MedicineTab";
import RecieptTab from "./RecieptTab";
const MedicineAndRecieptTab = (data) => {
  const [panel, setPanel] = useState("Medicine");
  console.log(data)
  const Panel = () => {
    return (
      <div className="flex w-full justify-center ">
        <ButtonPanel text="Medicine" />
        <ButtonPanel text="Reciept" />
      </div>
    );
  };
  const ButtonPanel = ({ text }) => {
    return (
      <div
        className={`w-[167px] h-[36px] mx-[0.5rem] text-center ${
          panel === text
            ? "bg-primary-50 text-primary-500"
            : "bg-base-white text-gray-500"
        } rounded-[6px] mt-[16px]`}
        onClick={() => setPanel(text)}
      >
        <h1 className="flex items-center w-full h-full justify-center typographyTextSmSemibold ">
          {text}
        </h1>
      </div>
    );
  };
  return (
    <div>
      <Panel />
      {panel === "Medicine" ? (
        <MedicineTab data={data.data} />
      ) : panel === "Reciept" ? (
        <RecieptTab data={data.data} />
      ) : (
        <>Error 404</>
      )}
    </div>
  );
};

export default MedicineAndRecieptTab;
