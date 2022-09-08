import { useState } from "react";
import Header from "../../components/Header";
import HistoryUpcomingTab from "./HistoryUpcomingTab";
import HistoryCompleteTab from "./HistoryCompleteTab";
import HistoryCancelTab from "./HistoryCancelTab";
const HistoryPage = () => {
  const [panel, setPanel] = useState("Upcoming");
  const ButtonPanel = ({ text }) => {
    return (
      <div
        className={`w-[109px] h-[36px] text-center ${
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
  const Panel = () => {
    return (
      <div className="flex w-full justify-between ">
        <ButtonPanel text="Upcoming" />
        <ButtonPanel text="Complete" />
        <ButtonPanel text="Cancel" />
      </div>
    );
  };
  return (
    <div className="px-[16px]">
      <Header textHeader="History appointment" />
      <Panel />
      {panel === "Complete" ? (
        <HistoryCompleteTab />
      ) : panel === "Cancel" ? (
        <HistoryCancelTab />
      ) : panel === "Upcoming" ? (
        <HistoryUpcomingTab />
      ) : (
        <>Error 404</>
      )}
    </div>
  );
};
export default HistoryPage;
