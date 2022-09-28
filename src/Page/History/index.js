import { useState, useEffect } from "react";
import apiDefault from "../../apiDefault";
import Header from "../../components/Header";
import HistoryUpcomingTab from "./HistoryUpcomingTab";
import HistoryCompleteTab from "./HistoryCompleteTab";
import HistoryCancelTab from "./HistoryCancelTab";
const HistoryPage = () => {
  const [panel, setPanel] = useState("Upcoming");
  const [listAppointment, setListAppointment] = useState({});
  useEffect(() => {
    getListAppointment();
  }, []);

  const getListAppointment = async () => {
    const res = await apiDefault.get("/appointment");
    setListAppointment(res.data);
  };
  
  const ButtonPanel = ({ text }) => {
    return (
      <div
        className={`w-[109px] h-[36px] mx-[0.5rem] text-center ${
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
      <div className="flex w-full justify-center ">
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
        <HistoryCompleteTab data={listAppointment.completed} />
      ) : panel === "Cancel" ? (
        <HistoryCancelTab data={listAppointment.cancelled} />
      ) : panel === "Upcoming" ? (
        <HistoryUpcomingTab data={listAppointment.scheduled} />
      ) : (
        <>Error 404</>
      )}
    </div>
  );
};
export default HistoryPage;
