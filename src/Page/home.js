import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import DefaultProfile from "../Assets/default_profile.png";
import AppointmentDetailCard from "../components/Appointment/AppointmentDetailCard";
import Navbar from "../components/Navbar";
import useAPI from "../hooks/useAPI";
import EmptyStatusIcon from "../Assets/Home/EmptyStatus.svg";

const mapState = state => ({
  user: state.user
});

const NotificationIcon = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.3887 20.8572C13.0246 22.372 10.8966 22.3899 9.51941 20.8572"
          stroke="#303ED9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

const HomePage = props => {
  dayjs.extend(utc);
  const navigate = useNavigate();
  const [apiDefault] = useAPI();
  const [detailYourAppointment, setDetailYourAppointment] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    getNextAppointment();
    getName();
  }, []);
  const getNextAppointment = async () => {
    const res = await apiDefault.get("/appointment/next");
    setDetailYourAppointment(res.data);
  };
  const getName = async () => {
    const res = await apiDefault.get("/info/name");
    setName(res.data);
    console.log(res.data);
  };
  console.log(props.user);
  return (
    <div>
      <div>
        <div className=" flex justify-between mt-[56px] px-[17px]  w-full">
          <div className="w-[173px]">
            <h1 className="typographyTextSmMedium text-primary-500">Welcome Back</h1>
            <h1 className="typographyHeadingXsSemibold">{name?.EN?.firstname} &#9996;</h1>
          </div>
          <div
            className="w-[45px] h-[45px] p-[5px] rounded-[15px] bg-primary-50 flex justify-center items-center "
            onClick={() => navigate("/notification")}
          >
            <NotificationIcon />
          </div>
        </div>
      </div>
      <h1 className="px-[17px] typographyTextMdSemibold mt-[17px]">Your Appointment</h1>
      <AppointmentDetailCard
        picture={detailYourAppointment?.doctor?.profile_pic_url}
        name={detailYourAppointment?.doctor?.full_name}
        position={detailYourAppointment?.doctor?.position}
        date={dayjs(detailYourAppointment?.start_date_time).format("DD MMMM YYYY")}
        time={
          dayjs(detailYourAppointment?.start_date_time).utcOffset(7).format("HH:mm") +
          "-" +
          dayjs(detailYourAppointment?.end_date_time).utcOffset(7).format("HH:mm")
        }
        onClick={() => {
          navigate("/appointment/detail", {
            state: { appointmentID: detailYourAppointment.id }
          });
        }}
        isButton={true}
      />
      <Navbar />
      <div className="mt-[30px] px-[16px]">
        <h1 className="typographyTextMdSemibold">Today's status</h1>
        <div className="flex flex-col justify-center items-center h-[300px] ">
          <img src={EmptyStatusIcon} alt="" width="200px" height="148px" />
          <h1 className="typographyTextXsMedium mt-[8px] w-[200px] text-center">
            You haven’t submited any measurement result.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default connect(mapState)(HomePage);
