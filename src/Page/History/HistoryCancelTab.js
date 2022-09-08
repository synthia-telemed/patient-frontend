import HistoryCard from "../../components/History/HistoryCard";
const HistoryCancelTab = () => {
  return (
    <div>
      {" "}
      <HistoryCard
        name="Dr. Kandfr adakdkamd"
        position="Siriraj"
        status="Cancel"
        colorStatus="bg-error-50 text-error-700"
        date="27 May 2022"
        time="14:30- 15:00 PM"
      />
      <HistoryCard
        name="Dr. Kandfr adakdkamd"
        position="Siriraj"
        status="Cancel"
        colorStatus="bg-error-50 text-error-700"
        date="22 May 2022"
        time="12:30- 13:00 PM"
      />
    </div>
  );
};
export default HistoryCancelTab;
