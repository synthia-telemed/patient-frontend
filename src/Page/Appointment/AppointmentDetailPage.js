import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import AppointmentDetailCard from "../../components/Appointment/AppointmentDetailCard";
import StatusAppointment from "../../components/Appointment/StatusAppointment";
import apiDefault from "../../apiDefault";
import HeaderWithBack from "../../components/HeaderWithBack";
import PrimaryButton from "../../components/Appointment/PrimaryButton";
import BadgeStatus from "../../components/Appointment/BadgeStatus";
import Prescription from "../../components/Appointment/Prescription";
import AppointmentWaitingIcon from "../../Assets/Appointment/appointment_waiting.svg";
import NextAppointment from "../../components/Appointment/NextAppointment";
import MedicineAndRecieptTab from "../../components/Appointment/MedicineAndRecieptTab";
const AppointmentDetailPage = () => {
  dayjs.extend(utc);
  const { state } = useLocation();
  const [detailAppointment, setDetailAppointment] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getDetailAppointment();
  }, []);

  const getDetailAppointment = async () => {
    const res = await apiDefault.get(`/appointment/${state.appointmentID}`);
    setDetailAppointment(res.data);
    console.log(res.data);
  };
  return (
    <div className="mb-[24px]">
      <HeaderWithBack textHeader="Appointment Detail" path="/history" />
      <AppointmentDetailCard
        picture={detailAppointment?.doctor?.profile_pic_url}
        name={detailAppointment?.doctor?.full_name}
        position={detailAppointment?.doctor?.position}
        date={dayjs(detailAppointment?.date_time).format("DD MMMM YYYY")}
        time={dayjs(detailAppointment?.date_time).utcOffset(7).format("HH:mm")}
      />
      {detailAppointment.status === "SCHEDULED" ? (
        <>
          <StatusAppointment
            textStatus="Please wait until the doctor come in."
            bgColor="bg-primary-50"
            colorText="text-primary-500"
          />
          <div className="mt-[16px] mx-[16px]">
            <h1 className="typographyTextLgSemibold">Details</h1>
            <h2 className="typographyTextSmRegular font-[400]">
              {detailAppointment?.detail}
            </h2>
          </div>
        </>
      ) : detailAppointment.status === "COMPLETED" &&
        detailAppointment.invoice === null ? (
        <>
          <StatusAppointment
            textStatus="You can pay the bill after invoice completed."
            bgColor="bg-primary-50"
            colorText="text-primary-500"
          />
          <div className="mt-[16px] flex flex-col w-full items-center">
            <img src={AppointmentWaitingIcon} alt="" />
            <h1 className="typographyTextSmMedium w-[211px] mt-[8px]">
              Waiting for the invoice and presciption from hospital.
            </h1>
          </div>
        </>
      ) : detailAppointment.status === "COMPLETED" &&
        detailAppointment.invoice &&
        detailAppointment.payment === null ? (
        <>
          <StatusAppointment
            textStatus="Pay the bill for check out on the button bellow."
            bgColor="bg-success-50"
            colorText="text-success-700"
          />
          <NextAppointment
            date={dayjs(detailAppointment?.next_appointment).format(
              "DD MMMM YYYY"
            )}
            time={dayjs(detailAppointment?.next_appointment)
              .utcOffset(7)
              .format("HH:mm")}
          />
          <h1 className="typographyTextLgSemibold mx-[16px] mt-[16px]">
            Prescriptions
          </h1>
          {detailAppointment?.prescriptions?.map((data) => (
            <Prescription
              medicine={data?.name}
              description={data?.description}
              tables={data?.amount}
              picture={data.picture_url}
              key={data.index}
            />
          ))}
          <div className="mt-[40px]">
            <PrimaryButton
              text="Checkout"
              width="235px"
              height="48px"
              onClick={() => {
                navigate("/appointment/summary-reciept", {
                  state: { appointmentID: state.appointmentID },
                });
              }}
            />
          </div>
        </>
      ) : detailAppointment.status === "COMPLETED" &&
        detailAppointment.invoice &&
        detailAppointment.payment ? (
        <div className="mx-[16px] mt-[10px] ">
          <h1 className=" flex typographyTextXsMedium text-gray-600">
            Your appointment status :{" "}
            <BadgeStatus
              text="Complete"
              style="bg-success-50 text-success-700"
            />
          </h1>
          <NextAppointment
            date={dayjs(detailAppointment?.next_appointment).format(
              "DD MMMM YYYY"
            )}
            time={dayjs(detailAppointment?.next_appointment)
              .utcOffset(7)
              .format("HH:mm")}
          />
          <h1 className="typographyTextLgSemibold mt-[16px]">
            Medicine And Reciept
          </h1>
          <MedicineAndRecieptTab data={detailAppointment} />
        </div>
      ) : (
        // <PrimaryButton text="Join Meeting" onClick={() => {}} />
        <></>
      )}
    </div>
  );
};
export default AppointmentDetailPage;
