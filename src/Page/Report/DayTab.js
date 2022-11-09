import GraphBarReport from "../../components/Report/GraphBarReport";
const DayTab = ({ bloodPressureData }) => {
  return (
    <div className="px-[16px] mt-[16px] mb-[100px]">
      <GraphBarReport bloodPressureData={bloodPressureData} name="Glucose" />
      <GraphBarReport bloodPressureData={bloodPressureData} name="Blood Pressure" />
      <GraphBarReport bloodPressureData={bloodPressureData} name="Pulse" />
    </div>
  );
};
export default DayTab;
