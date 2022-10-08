import { useState, React } from "react";
import Navbar from "../../components/Navbar";
import HeaderReport from "../../components/ReportComponent/HeaderReport";
import FloatingButton from "../../components/ReportComponent/FloatingButton";
import { DateTimePicker } from "@material-ui/pickers";
import BadgeStatus from "../../components/Appointment/BadgeStatus";
import ReportTab from "../../components/ReportComponent/ReportTab";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";

const ReportPage = () => {
  const [showModal, setShowModal] = useState(false);
  const current = new Date();
  const [selectedDate, handleDateChange] = useState(new Date(current));
  const { unit, data, x_label, ticks, isNumerical } = {
    unit: "mmHG",
    isNumerical: false,
    data: [
      {
        label: "S",
        values: [80, 120]
      },
      {
        label: "M"
      },
      {
        label: "T",
        values: [90, 130]
      },
      {
        label: "W"
      },
      {
        label: "T",
        values: [92, 123]
      },
      {
        label: "F"
      },
      {
        label: "S",
        values: [92, 123]
      }
    ]
  };
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
  return (
    <div className="overflow-auto h-[1000px]">
      <HeaderReport />
      <Navbar />
      <FloatingButton onClick={onClickReportMeasure} />
      <div className="px-[16px] mt-[16px]">
        <h1 className="typographyTextXlSemibold">Blood Pressure</h1>
        <h1 className="typographyTextSmMedium text-gray-600">Total avg this day</h1>
        <div className="flex items-center mt-[5px]">
          <h1 className="typographyHeadingXsSemibold text-success-700 mr-[16px] mb-[19px]">
            120/80 <span className="typographyTextSmMedium text-gray-600">mmHg</span>
          </h1>
          <BadgeStatus text="Normal" style="bg-success-50 text-success-700" />
        </div>
        <ResponsiveContainer width="100%" height={240} className="ml-[-16px]">
          <BarChart width={830} height={250} data={data} className="mt-[5px]">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              label={x_label}
              ticks={ticks}
              axisLine={false}
              className="typographyTextXsMedium"
              tickFormatter={isNumerical ? t => `${Math.floor(t / 60)}:00` : t => t}
              type={isNumerical ? "number" : "category"}
            />
            <YAxis
              domain={[0, 200]}
              axisLine={false}
              className="typographyTextXsMedium"
            />
            <Tooltip />
            <Bar barSize={10} dataKey="values" fill="#8884d8" radius={30}>
              <LabelList
                className="typographyTextXsMedium"
                width={20}
                dataKey="values"
                formatter={v => `${v[1]} ${unit}`}
                position="top"
              />
              <LabelList
                className="typographyTextXsMedium"
                width={20}
                dataKey="values"
                formatter={v => `${v[0]} ${unit}`}
                position="bottom"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <h1 className="typographyTextXsMedium text-gray-500 text-center">days</h1>
      </div>

      <div className="px-[16px] mt-[16px]">
        <h1 className="typographyTextXlSemibold">Glucose Level</h1>
        <h1 className="typographyTextSmMedium text-gray-600">Total avg this day</h1>
        <div className="flex items-center mt-[5px]">
          <h1 className="typographyHeadingXsSemibold text-success-700 mr-[16px] mb-[19px]">
            130<span className="typographyTextSmMedium text-gray-600 ml-[4px]">mg/dL</span>
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
                formatter={v => `${v} ${unit2}`}
                position="top"
              />

            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <h1 className="typographyTextXsMedium text-gray-500 text-center">days</h1>
      </div>
      {showModal ? (
        <>
          {" "}
          <div className="fixed inset-0 z-50 outline-none focus:outline-none overflow-auto">
            <div className="absolute bottom-[0%] w-auto mx-auto max-w-3xl ">
              {/*content*/}
              <div className="bg-base-white h-[600px] w-screen px-[16px] py-[24px] rounded-tl-[20px] rounded-tr-[20px]">
                <div className="flex justify-between">
                  <h1 className="typographyTextLgSemibold">Report Measurement Result</h1>
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
                  <ReportTab selectedDate={selectedDate} />
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
  );
};
export default ReportPage;
