import GraphBarReport from "../../components/Report/GraphBarReport";
import EmptyGraph from "../../Assets/Report/empty_graph.svg";
const DayTab = ({ bloodPressureData, pulseData, glucoseData }) => {
  console.log(glucoseData);
  const newGlucoseData = [glucoseData];

  return (
    <div className="px-[16px] mt-[16px] mb-[100px]">
      {bloodPressureData?.data?.length === 0 &&
      pulseData?.data?.length === 0 &&
      glucoseData?.data?.length === 0 ? (
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
      {glucoseData?.data?.afterMeal.length === 0 &&
      glucoseData?.data?.beforeMeal.length === 0 &&
      glucoseData?.data?.fasting.length === 0 ? (
        <></>
      ) : (
        <GraphBarReport
          data={glucoseData}
          name="Glucose"
          isLegend={false}
          detailGraph="Total avg this day"
          isHaveLastLabelList={false}
          isHaveTopLabelList={true}
          panel="Day"
          summaryValue={
            Math.round(glucoseData?.summary?.systolic) +
            " / " +
            Math.round(glucoseData?.summary?.diastolic) +
            " "
          }
        />
      )}
      {bloodPressureData?.data?.length === 0 ? (
        <></>
      ) : (
        <GraphBarReport
          data={bloodPressureData}
          name="Blood Pressure"
          isLegend={false}
          detailGraph="Total avg this day"
          isHaveLastLabelList={true}
          isHaveTopLabelList={true}
          panel="Day"
          summaryValue={
            Math.round(bloodPressureData?.summary?.systolic) +
            " / " +
            Math.round(bloodPressureData?.summary?.diastolic) +
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
          isLegend={false}
          panel="Day"
          isHaveLastLabelList={false}
          isHaveTopLabelList={true}
          summaryValue={Math.round(pulseData?.summary?.pulse) + " "}
          detailGraph="Total avg this day"
        />
      )}

      {/* <GraphBarReport bloodPressureData={bloodPressureData} name="Pulse" /> */}
    </div>
  );
};
export default DayTab;
