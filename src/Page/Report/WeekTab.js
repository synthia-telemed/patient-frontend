import GraphBarReport from "../../components/Report/GraphBarReport";
import GraphLineReport from "../../components/Report/GraphLineReport";
import EmptyGraph from "../../Assets/Report/empty_graph.svg";
const WeekTab = ({ bloodPressureData, pulseData }) => {
  return (
    <div className="px-[16px] mt-[16px] mb-[100px]">
      {/* <GraphLineReport data={bloodPressureData} name="Glucose" /> */}
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
          panel="Week"
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
          panel="Week"
          isHaveLastLabelList={false}
          summaryValue={parseFloat(pulseData?.summary?.pulse).toFixed(2) + " "}
          detailGraph="Total avg this day"
        />
      )}
    </div>
  );
};
export default WeekTab;
