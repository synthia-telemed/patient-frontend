import { useState, React } from "react";
import Navbar from "../../components/Navbar";
import HeaderReport from "../../components/ReportComponent/HeaderReport";
import FloatingButton from "../../components/ReportComponent/FloatingButton";
import { DateTimePicker } from "@material-ui/pickers";
import ReportTab from "../../components/ReportComponent/ReportTab";

const ReportPage = () => {
  const [showModal, setShowModal] = useState(false);
  const current = new Date();
  const [selectedDate, handleDateChange] = useState(new Date(current));
  const onClickReportMeasure = () => {
    setShowModal(true);
  };
  return (
    <div>
      <HeaderReport />
      <Navbar />
      <FloatingButton onClick={onClickReportMeasure} />
      <div className="px-[16px] mt-[16px]">
        <h1 className="typographyTextXlSemibold">Blood Pressure</h1>
        <h1 className="typographyTextSmMedium text-gray-600">Total avg this day</h1>
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
