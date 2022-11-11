import GraphBarReport from "../../components/Report/GraphBarReport";
import EmptyGraph from "../../Assets/Report/empty_graph.svg";
const DayTab = ({ bloodPressureData, pulseData }) => {
  return (
    <div className="px-[16px] mt-[16px] mb-[100px]">
      {bloodPressureData?.data?.length === 0 && pulseData?.data?.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[50vh]">
          {" "}
          <img src={EmptyGraph} width="218px" height="148px" alt="" />{" "}
          <h1 className="typographyTextXsMedium text-gray-800">
            {" "}
            You haven’t submited any measurement result.
          </h1>
        </div>
      ) : (
        <></>
      )}
      {bloodPressureData?.data?.length === 0 ? (
        <></>
      ) : (
        <GraphBarReport
          data={bloodPressureData}
          name="Glucose"
          isLegend={false}
          detailGraph="Total avg this day"
          isHaveLastLabelList={true}
          summaryValue={
            parseFloat(bloodPressureData?.summary?.systolic).toFixed(2) +
            " / " +
            parseFloat(bloodPressureData?.summary?.diastolic).toFixed(2) +
            " "
          }
        />
      )}
      {pulseData?.data?.length === 0 ? (
        <></>
      ) : (
        <GraphBarReport
          data={pulseData}
          name="Pulse"
          isLegend={true}
          isHaveLastLabelList={false}
          summaryValue={parseFloat(pulseData?.summary?.pulse).toFixed(2) + " "}
          detailGraph="Total avg this day"
        />
      )}

      {/* <GraphBarReport bloodPressureData={bloodPressureData} name="Pulse" /> */}
    </div>
  );
};
export default DayTab;
