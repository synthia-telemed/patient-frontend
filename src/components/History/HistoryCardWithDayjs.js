import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import HistoryCard from "../../components/History/HistoryCard";
import EmptyAppointment from "../../Assets/History/empty_appointment.svg";
import { useNavigate } from "react-router-dom";
const HistoryCardWithDayjs = ({ data }) => {
  dayjs.extend(utc);
  const navigate = useNavigate();
  return (
    <>
      {data === null ? (
        <div>
          <img src={EmptyAppointment} alt="" />
        </div>
      ) : (
        data?.map((data) => {
          console.log(data);
          return (
            <HistoryCard
              onClick={() =>
                navigate("/appointment/detail", {
                  state: { appointmentID: data.id },
                })
              }
              key={data.id}
              picture={data.doctor.profile_pic_url}
              name={data.doctor.full_name}
              position={data.doctor.position}
              colorStatus="bg-secondary-100 text-primary-500 "
              date={dayjs(data.date_time).format("DD MMMM YYYY")}
              time={dayjs(data.date_time).utcOffset(7).format("HH:mm")}
            />
          );
        })
      )}
    </>
  );
};
export default HistoryCardWithDayjs;
