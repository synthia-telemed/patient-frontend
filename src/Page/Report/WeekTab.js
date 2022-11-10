import GraphBarReport from "../../components/Report/GraphBarReport";
import GraphLineReport from "../../components/Report/GraphLineReport";
const WeekTab = ({bloodPressureData}) => {
  return (
    <div className="px-[16px] mt-[16px] mb-[100px]">
      <GraphLineReport bloodPressureData={bloodPressureData} name="Glucose" />
      <GraphBarReport bloodPressureData={bloodPressureData} name="Blood Pressure" />
      <GraphBarReport bloodPressureData={bloodPressureData} name="Pulse" />
    </div>
  );
};
export default WeekTab;
