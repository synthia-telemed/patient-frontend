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
  const addWeekDate = () => {
    handleDateChange(dayjs(selectedDate).add(7, "day"));
  };
  const subtractWeekDate = () => {
    handleDateChange(dayjs(selectedDate).subtract(7, "day"));
  };
  const addMonthDate = () => {
    handleDateChange(dayjs(selectedDate).add(1, "month"));
  };
  const subtractMonthDate = () => {
    handleDateChange(dayjs(selectedDate).subtract(1, "month"));
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
  const formatTodayDayjs = () => {
    return dayjs(selectedDate).isSame(current,"day")
      ? "Today " + dayjs(selectedDate).format("MMM YYYY")
      : dayjs(selectedDate).format("DD MMM YYYY");
  };
  const formatTodayWeekjs = () => {
    return dayjs(selectedDate).subtract(7, "day").isSame(current, "day")
      ? "Today " +
          dayjs(selectedDate).subtract(7, "day").format("MMM YYYY") +
          " - " +
          dayjs(selectedDate).format("DD MMM YYYY")
      : dayjs(selectedDate).isSame(current, "day")
      ? dayjs(selectedDate).subtract(7, "day").format("DD MMM YYYY") +
        " - " +
        "Today " +
        dayjs(selectedDate).format("MMM YYYY")
      : dayjs(selectedDate).subtract(7, "day").format("DD MMM YYYY") +
        " - " +
        dayjs(selectedDate).format("DD MMM YYYY");
  };
  const formatTodayMonthjs = () => {
    return dayjs(selectedDate).subtract(1, "month").isSame(current, "day")
      ? "Today " +
          dayjs(selectedDate).subtract(1, "month").format("MMM YYYY") +
          " - " +
          dayjs(selectedDate).format("DD MMM YYYY")
      : dayjs(selectedDate).isSame(current, "day")
      ? dayjs(selectedDate).subtract(1, "month").format("DD MMM YYYY") +
        " - " +
        "Today " +
        dayjs(selectedDate).format("MMM YYYY")
      : dayjs(selectedDate).subtract(1, "month").format("DD MMM YYYY") +
        " - " +
        dayjs(selectedDate).format("DD MMM YYYY");
  };
  useEffect(() => {
    fetchBloodPressure();
  }, []);
  useEffect(() => {
    fetchBloodPressure();
  }, [showModal]);

  useEffect(() => {
    handleDateChange(current);
  }, [panel]);

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
              panel === "Week"
                ? subtractWeekDate()
                : panel === "Month"
                ? subtractMonthDate()
                : subtractDate();
            }}
          />
          <h1 className="text-gray-600 typographyTextSmMedium">
            {" "}
            {panel === "Week"
              ? formatTodayWeekjs()
              : panel === "Month"
              ? formatTodayMonthjs()
              : formatTodayDayjs()}
          </h1>
          <img
            src={RightArrow}
            alt=""
            onClick={() => {
              panel === "Week"
                ? addWeekDate()
                : panel === "Month"
                ? addMonthDate()
                : addDate();
            }}
          />
        </div>
        <PanelReport />
        {panel === "Day" ? (
          <DayTab bloodPressureData={bloodPressureData} />
        ) : panel === "Week" ? (
          <WeekTab bloodPressureData={bloodPressureData} />
        ) : panel === "Month" ? (
          <MonthTab bloodPressureData={bloodPressureData} />
        ) : (
          <>Error 404</>
        )}

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
