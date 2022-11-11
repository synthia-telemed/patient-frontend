import GraphBarReport from "../../components/Report/GraphBarReport";
import GraphLineReport from "../../components/Report/GraphLineReport";
const MonthTab = ({ bloodPressureData }) => {
  return (
    <div className="px-[16px] mt-[16px] mb-[100px]">
      {/* <GraphLineReport data={bloodPressureData} name="Glucose" /> */}
      <GraphBarReport
        data={bloodPressureData}
        name="Glucose"
        isLegend={false}
        detailGraph="Total avg this day"
        isHaveLastLabelList={true}
        panel="Month"
        summaryValue={
          parseFloat(bloodPressureData?.summary?.systolic).toFixed(2) +
          " / " +
          parseFloat(bloodPressureData?.summary?.diastolic).toFixed(2) +
          " "
        }
      />
      {/* <GraphBarReport data={bloodPressureData} name="Pulse" /> */}
    </div>
  );
};
export default MonthTab;
