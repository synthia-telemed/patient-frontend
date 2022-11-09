import { useState, React, useEffect } from "react";
import Navbar from "../../components/Navbar";
import HeaderReport from "../../components/ReportComponent/HeaderReport";
import FloatingButton from "../../components/ReportComponent/FloatingButton";
import { DateTimePicker, DatePicker } from "@material-ui/pickers";
import BadgeStatus from "../../components/Appointment/BadgeStatus";
import ReportTab from "../../components/ReportComponent/ReportTab";
import dayjs from "dayjs";
import useApiMeasurement from "../../hooks/useApiMeasurement";
import LeftArrow from "../../Assets/arrow-left.svg";
import RightArrow from "../../Assets/right_arrow_icon.svg";
import DayTab from "./DayTab";
import WeekTab from "./WeekTab";
import MonthTab from "./MonthTab";

const ReportPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [panel, setPanel] = useState("Day");
  const [bloodPressureData, setBloodPressureData] = useState([]);
  const [apiDefault] = useApiMeasurement();
  const current = new Date();
  // const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c"];
  const [selectedDate, handleDateChange] = useState(new Date(current));
  const [date, setDate] = useState("");
  const { unit2, data2, x_label2, ticks2, isNumerical2 } = {
    unit2: "mg/dL",
    isNumerical2: false,
    data2: [
      {
        label: "S",
        values: 120
      },
      {
        label: "M"
      },
      {
        label: "T",
        values: 130
      },
      {
        label: "W"
      },
      {
        label: "T",
        values: 123
      },
      {
        label: "F"
      },
      {
        label: "S",
        values: 123
      }
    ]
  };
  const onClickReportMeasure = () => {
    setShowModal(true);
  };
  const onClickCloseModal = () => {
    setShowModal(false);
  };
  const fetchBloodPressure = async () => {
    const query = { granularity: "month", date: current.toISOString() };
    console.log(current.toISOString());
    const res = await apiDefault.get("/blood-pressure/visualization/patient", {
      params: query
    });
    setBloodPressureData(res.data);
  };
  const addDate = () => {
    handleDateChange(dayjs(selectedDate).add(1, "day"));
  };
  const subtractDate = () => {
    handleDateChange(dayjs(selectedDate).subtract(1, "day"));
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
  const PanelReport = () => {
    return (
      <div className="flex w-full justify-center ">
        <ButtonPanel text="Day" />
        <ButtonPanel text="Week" />
        <ButtonPanel text="Month" />
      </div>
    );
  };

  useEffect(() => {
    fetchBloodPressure();
  }, []);
  useEffect(() => {
    fetchBloodPressure();
  }, [showModal]);

  return (
    <div>
      <div className="overflow-auto h-[1000px]">
        <HeaderReport />
        <Navbar />
        <FloatingButton onClick={onClickReportMeasure} />
        <div className="flex width-[100vw] justify-between mt-[18px] px-[16px]">
          <img
            src={LeftArrow}
            alt=""
            onClick={() => {
              subtractDate();
            }}
          />
          <h1 className="text-gray-600 typographyTextSmMedium">
            {" "}
            {panel === "Week"
              ? dayjs(selectedDate).subtract(7, "day").format("DD MMMM YYYY") +
                " - " +
                dayjs(selectedDate).format("DD MMMM YYYY")
              : panel === "Month"
              ? dayjs(selectedDate).subtract(1, "month").format("DD MMMM YYYY") +
                " - " +
                dayjs(selectedDate).format("DD MMMM YYYY")
              : dayjs(selectedDate).format("DD MMMM YYYY")}
          </h1>
          <img
            src={RightArrow}
            alt=""
            onClick={() => {
              addDate();
            }}
          />
        </div>
        <PanelReport />
        {panel === "Day" ? (
          <DayTab bloodPressureData={bloodPressureData} />
        ) : panel === "Week" ? (
          <WeekTab bloodPressureData={bloodPressureData} />
        ) : panel === "Month" ? (
          <MonthTab />
        ) : (
          <>Error 404</>
        )}

        {/* <div className="px-[16px] mt-[16px]">
          <h1 className="typographyTextXlSemibold">Glucose Level</h1>
          <h1 className="typographyTextSmMedium text-gray-600">Total avg this day</h1>
          <div className="flex items-center mt-[5px]">
            <h1 className="typographyHeadingXsSemibold text-success-700 mr-[16px] mb-[19px]">
              130
              <span className="typographyTextSmMedium text-gray-600 ml-[4px]">mg/dL</span>
            </h1>
            <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
          </div>
          <ResponsiveContainer width="100%" height={240} className="ml-[-16px] ">
            <BarChart
              width={830}
              height={250}
              data={data2}
              className="mt-[5px] z-1 relative"
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="label"
                label={x_label2}
                ticks={ticks2}
                axisLine={false}
                className="typographyTextXsMedium"
                tickFormatter={isNumerical2 ? t => `${Math.floor(t / 60)}:00` : t => t}
                type={isNumerical2 ? "number" : "category"}
              />
              <YAxis
                domain={[0, 200]}
                axisLine={false}
                className="typographyTextXsMedium"
              />
              <Tooltip wrapperStyle={{ zIndex: 1000 }} />
              <Bar barSize={10} dataKey="values" fill="#8884d8" radius={30}>
                <LabelList
                  className="typographyTextXsMedium"
                  width={20}
                  dataKey="values"
                  formatter={v => `${v[0]} ${unit2}`}
                  position="top"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <h1 className="typographyTextXsMedium text-gray-500 text-center">days</h1>
        </div> */}
        {showModal ? (
          <>
            {" "}
            <div className="fixed inset-0 z-50 outline-none focus:outline-none overflow-auto">
              <div className="absolute bottom-[0%] w-auto mx-auto max-w-3xl ">
                {/*content*/}
                <div className="bg-base-white h-[600px] w-screen px-[16px] py-[24px] rounded-tl-[20px] rounded-tr-[20px]">
                  <div className="flex justify-between">
                    <h1 className="typographyTextLgSemibold">
                      Report Measurement Result
                    </h1>
                    <span
                      className="w-[24px] h-[24px] text-gray-600 text-[24px] flex justify-center items-center"
                      onClick={() => setShowModal(false)}
                    >
                      ×
                    </span>
                  </div>
                  <div className="mt-[12px] ">
                    <div className="flex items-center ">
                      <h1 className="typographyTextSmMedium">Date & Time</h1>
                      <div className="ml-[5px]">
                        <DateTimePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                          inputVariant="outlined"
                        />
                      </div>
                    </div>
                    <ReportTab
                      selectedDate={selectedDate}
                      setShowModal={onClickCloseModal}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-base-white"></div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default ReportPage;
