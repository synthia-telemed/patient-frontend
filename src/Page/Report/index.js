import { useState } from "react";
import Navbar from "../../components/Navbar";
import HeaderReport from "../../components/ReportComponent/HeaderReport";
import FloatingButton from "../../components/ReportComponent/FloatingButton";
import ModalReportMeasurement from "../../components/ReportComponent/ModalReportMeasurement";
const ReportPage = () => {
  const [showModal, setShowModal] = useState(false);
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
          <div className="fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="absolute bottom-[0%] w-auto mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-base-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-base-black text-base-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main thing people
                    are controlled by! Thoughts- their perception of themselves! They're
                    slowed down by their perception of themselves. If you're taught you
                    can’t do anything, you won’t do anything. I was taught I could do
                    everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
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
