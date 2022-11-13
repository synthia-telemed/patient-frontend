import GraphBarReport from "../../components/Report/GraphBarReport";
import GraphLineReport from "../../components/Report/GraphLineReport";
import EmptyGraph from "../../Assets/Report/empty_graph.svg";
const MonthTab = ({ bloodPressureData, pulseData, glucoseData }) => {
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
      {glucoseData?.data?.afterMeal.length === 0 &&
      glucoseData?.data?.beforeMeal.length === 0 &&
      glucoseData?.data?.fasting.length === 0 ? (
        <></>
      ) : (
        <GraphLineReport
          data={glucoseData}
          name="Glucose"
          isLegend={false}
          detailGraph="Total avg this month"
          isHaveLastLabelList={false}
          isHaveTopLabelList={true}
          panel=" Month"
        />
      )}
      {bloodPressureData?.data?.length === 0 ? (
        <></>
      ) : (
        <GraphBarReport
          data={bloodPressureData}
          name="Blood Pressure"
          isLegend={false}
          detailGraph="Total avg this month"
          isHaveLastLabelList={false}
          isHaveTopLabelList={false}
          panel="Month"
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
          panel="Week"
          isHaveLastLabelList={false}
          isHaveTopLabelList={false}
          summaryValue={Math.round(pulseData?.summary?.pulse) + " "}
          detailGraph="Total avg this month"
        />
      )}
      {/* <GraphBarReport data={bloodPressureData} name="Pulse" /> */}
    </div>
  );
};
export default MonthTab;
